import React from "react";
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label } from "reactstrap";

export default class PerksCard extends React.Component {
    render() {
        const PerkList = ({ perks, handleChange }) =>
            perks.map((perk, index) => (
                <Perk key={index} perk={perk} handleChange={handleChange} />
            ));
        const Perk = ({ perk, handleChange }) => (
            <FormGroup row>
                <Label sm={2}>{perk.name}</Label>
                <Col>
                    <Input type="text" value={perk.level} onChange={handleChange} />
                </Col>
            </FormGroup>
        );

        return (
            <Card>
                <CardHeader>
                    <strong>Perks</strong>
                </CardHeader>
                <CardBody>
                    <PerkList perks={this.props.data} handleChange={this.props.handleChange} />
                </CardBody>
            </Card>
        );
    }
}
