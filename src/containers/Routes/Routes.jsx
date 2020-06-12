import React, { useState, useEffect } from "react";
import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import { firestore } from "../../firebase";
import Button from "../../components/Button";
import AvailableChefs from "../AvailableChefs";
import ChefSignUpPage from "../ChefSignUpPage";
import ChefProfile from "../ChefProfile";
import { navigate, Link } from "@reach/router";

const Routes = (props) => {
  const { signIn, signOut, user, chefDetails } = props;

  const [userData, setUserData] = useState({});

  const userJsx = user ? <p>User exist</p> : <p>Nope</p>;

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

  // const addChefToDb = () => {
  //   firestore
  //     .collection("chefs")
  //     .doc(user.uid)
  //     .set({ chefDetails })
  //     .then(() => {
  //       fetchUserData();
  //     })
  //     .catch((error) => console.log(error));
  // };

  useEffect(() => {
    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getAllChefs = () => {
  //   firestore
  //     .collection("chefs")
  //     .get()
  //     .then((querySnapshot) => {
  //       let allChefs = [];
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.id, " => ", doc.data());
  //       });
  //     });
  // };

  const signInOutJsx = user ? (
    <Button btnText="Log Out" handleclick={signOut} />
  ) : (
    <Button btnText="Log In" handleclick={signIn} />
  );

  return (
    <>
      <nav className={styles.Navbar}>
        <h1>BeMyChef</h1>
        {/* {userJsx} */}
        {/* <div>
          <Button btnText="Log In" handleclick={signIn} />
          <Button btnText="Log Out" handleclick={signOut} />
        </div> */}
        <div>
          <Link to="/available-chefs">
            <Button btnText={"Available Chefs"} />
          </Link>

          <Link to="/chef-sign-up">
            <Button btnText={"Chef Sign Up"} />
          </Link>
        </div>
        {signInOutJsx}
      </nav>

      {/* <Button
        btnText="Add user to Db"
        handleclick={() => {
          addUserToDb();
        }}
      /> */}

      <div className={styles.Mainss}>
        <Router>
          {/* <Redirect noThrow from="/" to="landing" /> */}

          <AvailableChefs
            path="available-chefs"
            signIn={signIn}
            signOut={signOut}
            user={user}
            // addUserToDb={addUserToDb}
          />

          <ChefSignUpPage
            path="chef-sign-up"
            signIn={signIn}
            signOut={signOut}
            user={user}
            // addChefToDb={addChefToDb}
          />

          <ChefProfile
            path="chef-profile"
            signIn={signIn}
            signOut={signOut}
            user={user}
          />
        </Router>
      </div>
    </>
  );
};

export default Routes;
