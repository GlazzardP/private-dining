import React, { useState, useEffect } from "react";
// import firebase from "../../firebase";
import styles from "./AvailableChefs.module.scss";
import ChefProfile from "../ChefProfile";
import InputLabel from "../../components/InputLabel";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { firestore } from "../../firebase";
import ChefPage from "../ChefPage";

const AvailableChefs = (props) => {
  const { user } = props;
  const [formValues, setFormValues] = useState({});
  const [chefsState, updateChefs] = useState([]);
  const [selectedChef, toggleSelectedChef] = useState({});

  const [location, updateLocation] = useState("");

  console.log(chefsState);

  const getAllChefs = () => {
    firestore
      .collection("chefs")
      // .where("location", "==", location)
      .get()
      .then((querySnapshot) => {
        // let allChefs = querySnapshot.docs.map((doc) => doc.data());
        updateChefs(querySnapshot.docs.map((doc) => doc.data()));
        // console.log(doc.data);
      });
  };

  useEffect(() => {
    getAllChefs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const printChefJsx = chefsState.map((chef) => {
    return (
      <ChefProfile
        chefName={chef.firstName}
        chefArea={chef.location}
        courses={chef.courses}
        minGuests={chef.minGuests}
        maxGuests={chef.maxGuests}
        key={chef.lastName}
        chefObject={chef}
        selectedChef={selectedChef}
        path="/profile"
      />
      // <div>
      //   <p>${chef.firstName}</p>
      //   <p>${chef.location}</p>
      // </div>
    );
  });

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
    <section className={styles.AvailableChefs}>
      <section className={styles.availableSearch}>
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
            selectInput={(event) => updateLocation(event)}
          />
        </div>

        <Button btnText="Update Chefs" onclick={() => getAllChefs()} />
      </section>
      <section>{printChefJsx}</section>
      <section>
        {/* <ChefProfile /> */}
        <ChefPage
          toggleSelectedChe={toggleSelectedChef}
          selectedChef={selectedChef}
          // chef={chef}
        />
      </section>
    </section>
  );
};

export default AvailableChefs;
