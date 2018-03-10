import React from "react";
import { Card, CardBody, Col, Input, Row } from "reactstrap";

import WeaponFilter from "../../components/WeaponFilter/";

export default class RangedDamage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field, value) {
        // let newFilters = this.state.filters;
        // const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        // newFilters[event.target.name][event.target.id] = value;
        // this.setState({ filters: newFilters });
        this.setState({ [field]: value });
    }

    render() {
        const helpText = `Damage = ( BaseDamage + EvolutionDamage ) * 
        ( 1 + (WeaponLevel-1) * 0.05 ) * 
        ( 1 + Offense/100 + SurvivorBonuses ) * 
        ( 1 + HeroDamageBonuses + WeaponDamageBonuses )`;
        return (
            <div>
                <Row>
                    <Col>
                        <WeaponFilter
                            filters={this.state.filters}
                            handleChange={this.handleChange}
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
            </div>
        );
    }
}
