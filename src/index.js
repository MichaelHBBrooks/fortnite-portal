import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import registerServiceWorker from "./registerServiceWorker";
import Full from "./containers/Full/";

import "font-awesome/css/font-awesome.min.css";
import "./scss/style.scss";

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" name="Home" component={Full} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
registerServiceWorker();
