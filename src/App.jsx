import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Button from "./components/Button";
import InputField from "./components/InputField";
import ChefProfile from "./containers/ChefProfile";
import InputLabel from "./components/InputLabel";
import Routes from "./containers/Routes";
import { navigate, Link } from "@reach/router";
import firebase, { provider } from "./firebase";

// import gino from "./assets/images/gino.jpeg";

function App() {
  // const [searchValue, updateSearchValue] = useState(null);
  const [user, setUser] = useState(null);

  // Authentication
  const signIn = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        // redirectTo("/landing-page");
        setUser(null);
      }
    });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        alert("You have signed out");
      })
      .catch((error) => {
        alert("Oh no an error :(");
      });
  };

  useEffect(() => {
    getUser();
  }, []);
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

      <Link to="/chef-sign-up">
        <Button btnText={"Chef Sign Up"} />
      </Link>

      {/* <div className={styles.signingUpIn}>
        <Button btnText="Sing up as a customer" />
        <Button btnText="Sing up as a Chef" />
      </div> */}
      <Routes signIn={signIn} signOut={signOut} user={user} />
    </>
  );
}

export default App;
