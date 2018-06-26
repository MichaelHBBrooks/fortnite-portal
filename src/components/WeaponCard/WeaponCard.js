import React from "react";
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label } from "reactstrap";

export default class WeaponCard extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    <strong>{this.props.name}</strong>
                </CardHeader>
                <CardBody>
                    <FormGroup row>
                        <Label sm={2}>Damage</Label>
                        <Col>
                            <Input
                                id="weaponDmg"
                                type="number"
                                value={this.props.dmg}
                                onChange={this.props.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Critical Chance</Label>
                        <Col>
                            <Input
                                id="weaponCritChance"
                                type="number"
                                value={this.props.critChance}
                                onChange={this.props.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Critical Damage</Label>
                        <Col>
                            <Input
                                id="weaponCritDmg"
                                type="number"
                                value={this.props.critDmg}
                                onChange={this.props.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Fire Rate</Label>
                        <Col>
                            <Input
                                id="weaponFireRate"
                                type="number"
                                value={this.props.fireRate}
                                onChange={this.props.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Magazine Size</Label>
                        <Col>
                            <Input
                                id="weaponMagSize"
                                type="number"
                                value={this.props.magSize}
                                onChange={this.props.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Range</Label>
                        <Col>
                            <Input
                                id="weaponRange"
                                type="number"
                                value={this.props.range}
                                onChange={this.props.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Reload Speed</Label>
                        <Col>
                            <Input
                                id="weaponReload"
                                type="number"
                                value={this.props.reload}
                                onChange={this.props.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Ammo Cost</Label>
                        <Col>
                            <Input
                                id="weaponAmmoCost"
                                type="number"
                                value={this.props.ammoCost}
                                onChange={this.props.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Impact</Label>
                        <Col>
                            <Input
                                id="weaponImpact"
                                type="number"
                                value={this.props.impact}
                                onChange={this.props.handleChange}
                            />
                        </Col>
                    </FormGroup>
                </CardBody>
            </Card>
        );
    }
}
