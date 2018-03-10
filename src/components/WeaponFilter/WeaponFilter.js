import React from "react";
import { Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row } from "reactstrap";

class WeaponFilter extends React.Component {
    handleChange = event => {
        let newFilters = this.props.filters;
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        if (event.target.name) {
            newFilters[event.target.name][event.target.id] = value;
        } else {
            newFilters[event.target.id] = value;
        }
        this.props.handleChange("filters", newFilters);
    };

    render() {
        const rarity = this.props.filters.rarity;
        const ranged = this.props.filters.ranged;
        const ammo = this.props.filters.ammo;
        const Option = props => (
            <FormGroup check className="checkbox">
                <Input
                    className="form-check-input"
                    type="checkbox"
                    name={props.name}
                    id={props.id}
                    checked={props.checked}
                    onChange={this.handleChange}
                />
                <Label className="form-check-label" for={props.id}>
                    {props.label}
                </Label>
            </FormGroup>
        );

        const Rarity = () => (
            <div>
                <Label>Rarity</Label>
                <Option name="rarity" id="common" label="Common" checked={rarity.common} />
                <Option name="rarity" id="uncommon" label="Uncommon" checked={rarity.uncommon} />
                <Option name="rarity" id="rare" label="Rare" checked={rarity.rare} />
                <Option name="rarity" id="epic" label="Epic" checked={rarity.epic} />
                <Option name="rarity" id="legendary" label="Legendary" checked={rarity.legendary} />
            </div>
        );

        const RangedWeapon = () => (
            <div>
                <Label>Weapon Types</Label>
                <Option name="ranged" id="shotgun" label="Shotgun" checked={ranged.shotgun} />
                <Option name="ranged" id="pistol" label="Pistol" checked={ranged.pistol} />
                <Option name="ranged" id="rifle" label="Rifle" checked={ranged.rifle} />
                <Option name="ranged" id="sniper" label="Sniper" checked={ranged.sniper} />
                <Option name="weapon" id="explosive" label="Explosive" checked={ranged.explosive} />
            </div>
        );

        const Ammo = () => (
            <div>
                <Label>Ammo</Label>
                <Option name="ammo" id="shotgun" label="Shotgun Shells" checked={ammo.shotgun} />
                <Option name="ammo" id="light" label="Light" checked={ammo.light} />
                <Option name="ammo" id="medium" label="Medium" checked={ammo.medium} />
                <Option name="ammo" id="heavy" label="Heavy" checked={ammo.heavy} />
                <Option name="ammo" id="energy" label="Energy" checked={ammo.energy} />
            </div>
        );

        return (
            <Card>
                <CardHeader>
                    <h1>Filter</h1>
                </CardHeader>
                <CardBody>
                    <FormGroup row>
                        <Col md="4">
                            <Rarity />
                        </Col>
                        <Col md="4">
                            <RangedWeapon />
                        </Col>
                        <Col md="4">
                            <Ammo />
                        </Col>
                    </FormGroup>
                    <Row>
                        <Col>
                            <Label for="textMatch">Text Match</Label>
                            <Input
                                id="searchText"
                                type="text"
                                value={this.props.filters.text}
                                onChange={this.handleChange}
                                maxLength="300"
                            />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }
}

export default WeaponFilter;
