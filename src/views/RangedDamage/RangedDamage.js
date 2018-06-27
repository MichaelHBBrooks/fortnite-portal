import React from "react";
import { Card, CardBody, Col, Input, Row } from "reactstrap";

import WeaponFilter from "../../components/WeaponFilter/";
import WeaponCard from "../../components/WeaponCard/";
import PlayerCard from "../../components/PlayerCard/";
import PerksCard from "../../components/PerksCard/";
import { damageCalc, getCritChance } from "../../libs/calculations";

import rangedData from "../../data/ranged.json";
import playerData from "../../data/player.json";

export default class RangedDamage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            filters: {
                rarity: {
                    common: false,
                    uncommon: false,
                    rare: false,
                    epic: false,
                    legendary: true
                },
                weaponType: { ranged: true, melee: false },
                ranged: {
                    pistol: true,
                    shotgun: true,
                    rifle: true,
                    sniper: true,
                    explosive: true
                },
                melee: {
                    sword: true,
                    axe: false,
                    spear: false,
                    hardware: true
                },
                ammo: {
                    light: true,
                    medium: true,
                    heavy: true,
                    shotgun: true,
                    energy: true
                },
                searchText: ""
            },
            weaponDmg: 0,
            weaponCritChance: 0,
            weaponCritDmg: 0,
            weaponFireRate: 0,
            weaponMagSize: 0,
            weaponRange: 0,
            weaponReload: 0,
            weaponAmmoCost: 0,
            weaponImpact: 0,
            playerOffense: 0,
            playerRngDmgBonus: 0,
            schematicPerks: []
        };
        this.handleSectionChange = this.handleSectionChange.bind(this);
    }

    componentDidMount() {
        try {
            const weaponResults = this.loadWeapons();
            const playerResults = this.getPlayer("Jinieren");
            const weapon = weaponResults.rifles[0];
            this.setState({
                weaponDmg: weapon.base.dmg,
                weaponCritChance: weapon.base.critChance,
                weaponCritDmg: weapon.base.critDmg,
                weaponFireRate: weapon.base.fireRate,
                weaponMagSize: weapon.base.magSize,
                weaponRange: weapon.base.range,
                weaponReload: weapon.base.reload,
                weaponAmmoCost: weapon.base.ammoCost,
                weaponImpact: weapon.base.impact,
                playerOffense: playerResults.simple.offense,
                playerRngDmgBonus: playerResults.simple.rngDmgBonus,
                schematicPerks: playerResults.schematics[0].perks
            });
        } catch (e) {
            alert(e);
        }
        this.setState({ isLoading: false });
    }

    loadWeapons() {
        return rangedData;
    }

    getPlayer(name) {
        return playerData;
    }

    handleSectionChange(field, value) {
        // let newFilters = this.state.filters;
        // const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        // newFilters[event.target.name][event.target.id] = value;
        // this.setState({ filters: newFilters });
        this.setState({ [field]: value });
    }

    handleChange = event => {
        this.setState({
            [event.target.id]:
                event.target.type === "checkbox" ? event.target.checked : event.target.value
        });
    };

    render() {
        const player = {
            offense: this.state.playerOffense,
            rngDmgBonus: this.state.playerRngDmgBonus
        };

        // const weapon = {
        //     name: "Razorblade",
        //     dmg: this.state.weaponDmg,
        //     critChance: this.state.weaponCritChance,
        //     critDmg: this.state.weaponCritDmg,
        //     fireRate: this.state.weaponFireRate,
        //     magSize: this.state.weaponMagSize,
        //     range: this.state.weaponRange,
        //     reload: this.state.weaponReload,
        //     ammoCost: this.state.weaponAmmoCost,
        //     impact: this.state.weaponImpact
        // };

        const helpText = `Damage = ( BaseDamage + EvolutionDamage ) * 
        ( 1 + (WeaponLevel-1) * 0.05 ) * 
        ( 1 + Offense/100 + SurvivorBonuses ) * 
        ( 1 + HeroDamageBonuses + WeaponDamageBonuses )`;
        return (
            !this.state.isLoading && (
                <div className="animated fadeIn">
                    <Row>
                        <Col>
                            <WeaponFilter
                                filters={this.state.filters}
                                handleChange={this.handleSectionChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="3">
                            <Card>
                                <CardBody>
                                    <Input id="weaponSort" type="select">
                                        <option>Class</option>
                                    </Input>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm="3">
                            <Card>
                                <CardBody>Common Pistol</CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <CardBody>
                                    <pre>{`${helpText}`}</pre>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PlayerCard data={player} handleChange={this.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <WeaponCard
                                name="Razorblade"
                                dmg={this.state.weaponDmg}
                                critChance={this.state.weaponCritChance}
                                critDmg={this.state.weaponCritDmg}
                                fireRate={this.state.weaponFireRate}
                                magSize={this.state.weaponMagSize}
                                range={this.state.weaponRange}
                                reload={this.state.weaponReload}
                                ammoCost={this.state.weaponAmmoCost}
                                impact={this.state.weaponImpact}
                                handleChange={this.handleChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <PerksCard
                                data={this.state.schematicPerks}
                                handleChange={this.handleChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <CardBody>
                                    <h1>
                                        {/* <DamageCalculator player={player} weapon={weapon} perks={perks} /> */}
                                        Damage:{" "}
                                        {Math.round(
                                            damageCalc(
                                                21,
                                                "legendary",
                                                3,
                                                false,
                                                1,
                                                30,
                                                2346,
                                                5,
                                                this.state.schematicPerks,
                                                "",
                                                "",
                                                "",
                                                ""
                                            ) * 10
                                        ) / 10}
                                    </h1>
                                    <h1>Crit Chance: {getCritChance(56, true)}</h1>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
        );
    }
}
