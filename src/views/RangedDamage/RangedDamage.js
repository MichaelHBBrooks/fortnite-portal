import React from "react";
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row } from "reactstrap";

export default class RangedDamage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterRarity: {
                common: false,
                uncommon: false,
                rare: false,
                epic: false,
                legendary: true
            },
            filterWeaponType: { ranged: true, melee: false },
            filterRangedType: {
                pistol: true,
                shotgun: true,
                rifle: true,
                sniper: true,
                explosive: true
            },
            filterMeleeType: {
                sword: true,
                axe: false,
                spear: false,
                hardware: true
            },
            filterText: ""
        };
    }

    render() {
        const filterVariables = {
            rarity: this.state.filterRarity,
            weaponType: this.state.filterWeaponType,
            rangedType: this.state.filterRangedType,
            meleeType: this.state.filterMeleeType,
            text: this.state.filterText
        };
        const helpText = `Damage = ( BaseDamage + EvolutionDamage ) * 
        ( 1 + (WeaponLevel-1) * 0.05 ) * 
        ( 1 + Offense/100 + SurvivorBonuses ) * 
        ( 1 + HeroDamageBonuses + WeaponDamageBonuses )`;
        return (
            <div>
                <Row>
                    <Col>
                        <WeaponFilter filters={filterVariables} />
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

class WeaponFilter extends React.Component {
    onRarityChange = event => {
        console.log("Yup. A field changed.");
        // this.props.onChange("filterRarity")
    };

    render() {
        const RarityOption = props => (
            <FormGroup check className="checkbox">
                <Input
                    className="form-check-input"
                    type="checkbox"
                    id={props.id}
                    checked={props.checked}
                    onChange={this.onRarityChange}
                />
                <Label className="form-check-label" for={props.id}>
                    {props.label}
                </Label>
            </FormGroup>
        );

        return (
            <Card>
                <CardHeader>
                    <h1>Filter</h1>
                </CardHeader>
                <CardBody>
                    <FormGroup row>
                        <Col md="3">
                            <Label>Rarity</Label>
                        </Col>
                        <Col md="9">
                            <RarityOption
                                id="rarityCommon"
                                label="Common"
                                checked={this.props.filters.rarity.common}
                            />
                            <RarityOption
                                id="rarityUncommon"
                                label="Uncommon"
                                checked={this.props.filters.rarity.uncommon}
                            />
                            <RarityOption
                                id="rarityRare"
                                label="Rare"
                                checked={this.props.filters.rarity.rare}
                            />
                            <RarityOption
                                id="rarityEpic"
                                label="Epic"
                                checked={this.props.filters.rarity.epic}
                            />
                            <RarityOption
                                id="rarityLegendary"
                                label="Legendary"
                                checked={this.props.filters.rarity.legendary}
                            />
                        </Col>
                    </FormGroup>
                </CardBody>
            </Card>
        );
    }
}
