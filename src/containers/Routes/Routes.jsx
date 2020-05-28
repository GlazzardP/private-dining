import React, { useState, useEffect } from "react";
// import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import { firestore } from "../../firebase";
import Button from "../../components/Button";
import AvailableChefs from "../AvailableChefs";
import ChefSignUpPage from "../ChefSignUpPage";

const Routes = (props) => {
  const { signIn, signOut, user, chefDetails } = props;

  const [userData, setUserData] = useState({});

  console.log(user);

  const fetchUserData = () => {
    if (user) {
      firestore
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          setUserData(doc.data());
        })
        .catch((error) => console.log(error));
    }
  };

  const addUserToDb = () => {
    firestore
      .collection("users")
      .doc(user.uid)
      .set({ user: "hello" })
      // .then(() => {
      //   fetchUserData();
      // })
      .catch((error) => console.log(error));
  };

  const addChefToDb = () => {
    firestore
      .collection("chefs")
      .doc(user.uid)
      .set({ chefInfo: "chefDetails" })
      .then(() => {
        fetchUserData();
      })
      .catch((error) => console.log(error));
  };

  // const addToDb = (apiData) => {
  //   firestore
  //     .collection("users")
  //     .doc(user.uid)
  //     .set({
  //       ...userData,
  //       questionnaireAnswers: formValues,
  //       userApiData: apiData,
  //     })
  //     .then(routesFetch())
  //     .catch((error) => errorHandle(error));
  // };

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Button btnText="Log In" handleclick={signIn} />
      <Button btnText="Log Out" handleclick={signOut} />
      <Button
        btnText="Add user to Db"
        handleclick={() => {
          addUserToDb();
        }}
      />

      <Router>
        {/* <Redirect noThrow from="/" to="landing" /> */}

        <AvailableChefs
          path="available-chefs"
          signIn={signIn}
          signOut={signOut}
          user={user}
          addUserToDb={addUserToDb}
        />
        <ChefSignUpPage
          path="chef-sign-up"
          signIn={signIn}
          signOut={signOut}
          user={user}
          addChefToDb={addChefToDb}
        />
      </Router>
    </>
  );
};

export default Routes;
