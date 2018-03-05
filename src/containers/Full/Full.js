import React from "react";
import { Container } from "reactstrap";

import Routes from "../../Routes";

export default class Full extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="app-body">
                    <main className="main">
                        <Container fluid>
                            <Routes />
                        </Container>
                    </main>
                </div>
            </div>
        );
    }
}
