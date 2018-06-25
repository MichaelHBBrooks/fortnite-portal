import React from "react";
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label } from "reactstrap";

export default class WeaponCard extends React.Component {
    // constructor(props) {
    //     super(this);
    // }

    render() {
        const weapon = this.props.weapon;
        return (
            <Card>
                <CardHeader>
                    <strong>{weapon.variations[4].name}</strong>{" "}
                    <small>
                        {this.props.rarity} {weapon.template}
                    </small>
                </CardHeader>
                <CardBody>
                    <FormGroup row>
                        <Label sm={2}>Damage</Label>
                        <Col>
                            <Input type="text" readOnly value={weapon.base.dmg} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Critical Chance</Label>
                        <Col>
                            <Input type="text" readOnly value={weapon.base.critChance} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Critical Damage</Label>
                        <Col>
                            <Input type="text" readOnly value={weapon.base.critDmg} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Fire Rate</Label>
                        <Col>
                            <Input type="text" readOnly value={weapon.base.fireRate} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Magazine Size</Label>
                        <Col>
                            <Input type="text" readOnly value={weapon.base.magSize} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Range</Label>
                        <Col>
                            <Input type="text" readOnly value={weapon.base.range} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Reload Speed</Label>
                        <Col>
                            <Input type="text" readOnly value={weapon.base.reload} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Ammo Cost</Label>
                        <Col>
                            <Input type="text" readOnly value={weapon.base.ammoCost} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Impact</Label>
                        <Col>
                            <Input type="text" readOnly value={weapon.base.impact} />
                        </Col>
                    </FormGroup>
                </CardBody>
            </Card>
        );
    }
}
