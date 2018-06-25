import React from "react";
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label } from "reactstrap";

export default class Playercard extends React.Component {
    // constructor(props) {
    //     super(this);
    // }

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
                            <Input type="text" readOnly value={player.simple.offense} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={2}>Squad Ranged Damage Bonus</Label>
                        <Col>
                            <Input type="text" readOnly value={player.simple.rngDmgBonus} />
                        </Col>
                    </FormGroup>
                </CardBody>
            </Card>
        );
    }
}
