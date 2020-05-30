import React, { useState } from "react";
// import firebase from "../../firebase";
import styles from "./AvailableChefs.module.scss";
import ChefProfile from "../ChefProfile";
import InputLabel from "../../components/InputLabel";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import gino from "../../assets/images/gino.jpeg";
import { firestore } from "../../firebase";

const AvailableChefs = (props) => {
  const { user } = props;
  const [formValues, setFormValues] = useState({});

  // Search Params
  // const [guestNo, updateGuestNo] = useState()
  // const [maxPrice, updateMaxPrice] = useState();
  // const [location, updateLocation] = useState("");
  // const [chefRating, updateChefRating] = useState(null);

  // const refineChefs = () => {
  //   allChefs.filter((chef) => chef.cost > maxPrice  && chef.location === "location" && chef && ()
  // }

  const getAllChefs = () => {
    firestore
      .collection("chefs")
      .get()
      .then((querySnapshot) => {
        let allChefs = [];
        querySnapshot.forEach((doc) => {
          allChefs.push(doc.id.chefDetails, " => ", doc());
          // allChefs.push(doc.id, " => ", doc);
          // allChefs.push(doc);
        });
        console.log(allChefs);
      });
  };

  const addUserParams = () => {
    firestore
      .collection("users")
      .doc(user.uid)
      .set({ formValues })
      // .then(() => {
      //   fetchUserData();
      // })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {/* <Button btnText="Log In" handleclick={signIn} />
      <Button btnText="Log Out" handleclick={signOut} />

      <Button
        btnText="DB ADD"
        handleclick={() => {
          addToDb();
        }}
      /> */}

      <section className={styles.AvailableChefs}>
        <section className={styles.availableSearch}>
          {/* <div className={styles.availabilityForm}> */}
          <div>
            <InputLabel labelName="No. of people" />
            <InputField
              type="number"
              placeholder=" 6"
              selectInput={(event) =>
                setFormValues({ ...formValues, attendees: event })
              }
            />
          </div>

          <div>
            <InputLabel labelName="Min-price" />
            <InputField
              type="number"
              placeholder=" 100"
              // value="min price"
              selectInput={(event) =>
                setFormValues({ ...formValues, price: event })
              }
            />
          </div>

          <div>
            <InputLabel labelName="Max-price" />
            <InputField
              type="number"
              placeholder=" 600"
              // value="max price"
              selectInput={(event) =>
                setFormValues({ ...formValues, price2: event })
              }
            />
          </div>

          <div>
            <InputLabel labelName="Where?" />
            <InputField
              type="text"
              placeholder=" Location"
              // value="location"
              selectInput={(event) =>
                setFormValues({ ...formValues, location: event })
              }
            />
          </div>

          <p>Star Rating</p>

          <Button
            btnText="Submit"
            onclick={() => {
              addUserParams();
            }}
          />
          {/* </div> */}
        </section>

        <section>
          {/* {getAllChefs()} */}
          {/* <Button
        btnText="Get all chefs back"
        handleclick={() => {
          getAllChefs();
        }}
      /> */}
          {/* <ChefProfile
            image={gino}
            chefCuisines="Italian, French and Thai"
            chefName="Gino"
            chefArea="Bristol, Sardinia, Rome"
          />
          <ChefProfile
            image={gino}
            chefCuisines="Italian, French and Thai"
            chefName="Gino"
            chefArea="Bristol, Sardinia, Rome"
          />
          <ChefProfile
            image={gino}
            chefCuisines="Italian, French and Thai"
            chefName="Gino"
            chefArea="Bristol, Sardinia, Rome"
          /> */}
        </section>
      </section>
    </>
  );
};

export default AvailableChefs;
