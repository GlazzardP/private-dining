import React, { useState } from "react";
import styles from "./App.module.scss";
import Button from "./components/Button";
import InputField from "./components/InputField";
import ChefProfile from "./containers/ChefProfile";
import InputLabel from "./components/InputLabel";
import Routes from "./containers/Routes";
import { navigate, Link } from "@reach/router";

// import gino from "./assets/images/gino.jpeg";

function App() {
  const [searchValue, updateSearchValue] = useState(null);

  return (
    <>
      {/* <nav>
        <header>
          <h1>Private Dining</h1>
        </header>
        <Button btnText="Log in" />
      </nav>
      <InputField
        placeholder="Your location"
        type="text"
        selectInput={(event) => {
          updateSearchValue(event);
        }}
      />
      <InputField placeholder="Your location" type="submit" /> */}

      <Link to="/available-chefs">
        <Button btnText={"Available Chefs"} />
      </Link>

      {/* <div className={styles.signingUpIn}>
        <Button btnText="Sing up as a customer" />
        <Button btnText="Sing up as a Chef" />
      </div> */}
      <Routes />
    </>
  );
}

export default App;
