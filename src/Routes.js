import React from "react";
import { Route, Switch } from "react-router-dom";

import RangedDamage from "./views/RangedDamage/";

export default () => (
    <Switch>
        <Route path="/" exact component={RangedDamage} />
    </Switch>
);
