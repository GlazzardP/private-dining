import React from "react";
// import styles from "./Routes.module.scss";

import { Router, Redirect } from "@reach/router";
import AvailableChefs from "../AvailableChefs";

const Routes = () => {
  return (
    <>
      <Router>
        {/* <Redirect noThrow from="/" to="landing" /> */}
        <AvailableChefs path="available-chefs" />
      </Router>
    </>
  );
};

export default Routes;
