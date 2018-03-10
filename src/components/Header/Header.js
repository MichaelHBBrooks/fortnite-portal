import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Nav, NavItem, NavLink } from "reactstrap";

class Header extends React.Component {
    render() {
        return (
            <header className="app-header navbar">
                <Nav navbar>
                    <NavItem className="px-3">
                        <NavLink tag={Link} to="/ranged">
                            Ranged
                        </NavLink>
                    </NavItem>
                    {/* TODO: Create melee page. */}
                    {/* <NavItem className="px-3">
                        <NavLink tag={Link} to="/ranged">
                            Melee
                        </NavLink>
                    </NavItem> */}
                </Nav>
            </header>
        );
    }
}

export default Header;
