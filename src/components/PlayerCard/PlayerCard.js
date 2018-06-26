import React from "react";
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label } from "reactstrap";

export default class PlayerCard extends React.Component {
    render() {
        const player = this.props.data;
        return (
            <Card>
                <CardHeader>
                    <strong>{player.name}</strong>
                </CardHeader>
                <CardBody>
                    <FormGroup row>
                        <Label sm={2}>Offense</Label>
                        <Col>
                            <Input
                                id="playerOffense"
                                type="number"
                                value={player.offense}
                                onChange={this.props.handleChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Squad Ranged Damage Bonus</Label>
                        <Col>
                            <Input
                                id="playerRngDmgBonus"
                                type="number"
                                value={player.rngDmgBonus}
                                onChange={this.props.handleChange}
                            />
                        </Col>
                    </FormGroup>
                </CardBody>
            </Card>
        );
    }
}
