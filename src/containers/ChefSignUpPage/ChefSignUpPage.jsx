import React, { useState } from "react";
import styles from "./ChefSignUpPage.module.scss";
import InputField from "../../components/InputField";
import InputLabel from "../../components/InputLabel";
import { firestore } from "../../firebase";
import Button from "../../components/Button";

const ChefSignUpPage = (props) => {
  const { user, addUserToDb, handleInput, fetchUserData } = props;

  const [chefDetails, setChefDetails] = useState({});

  const addChefToDb = () => {
    firestore
      .collection("chefs")
      .doc(user.uid)
      .set({ chefDetails })
      .then(() => {
        fetchUserData();
      })
      .catch((error) => console.log(error));
  };

  console.log(chefDetails);

  return (
    <>
      {/* <Button btnText="Log In" handleclick={signIn} />
      <Button btnText="Log Out" handleclick={signOut} /> */}

      <Button
        btnText="ADD user to db"
        handleclick={() => {
          addUserToDb();
        }}
      />
      <section className={styles.availableChefs}>
        <div>
          <InputLabel labelName="First name" />
          <InputField
            type="text"
            placeholder="John"
            // handleInput={(event) =>
            //   setChefDetails({ ...chefDetails, FirstName: event })
            // }
            selectInput={(event) =>
              setChefDetails({
                ...chefDetails,
                firstName: event,
              })
            }
          />
        </div>

        <div>
          <InputLabel labelName="Last name" />
          <InputField
            type="text"
            placeholder="Smith"
            selectInput={(event) =>
              setChefDetails({
                ...chefDetails,
                lastName: event,
              })
            }
          />
        </div>

        <div>
          <InputLabel labelName="Minimum number of people you would cook for?" />
          <InputField
            type="number"
            placeholder="2"
            selectInput={(event) =>
              setChefDetails({
                ...chefDetails,
                minGuests: event,
              })
            }
          />
        </div>

        <div>
          <InputLabel labelName="Maximum number of people you would cook for?" />
          <InputField
            type="number"
            placeholder="12"
            selectInput={(event) =>
              setChefDetails({
                ...chefDetails,
                maxGuests: event,
              })
            }
          />
        </div>

        <div>
          <InputLabel labelName="Locations" />
          <InputField
            type="text"
            placeholder="Bristol"
            selectInput={(event) =>
              setChefDetails({
                ...chefDetails,
                location: event,
              })
            }
          />
        </div>

        <div>
          <InputLabel labelName="Cuisines" />

          <select
            name="cuisines"
            id="cuisines"
            selectInput={(event) =>
              setChefDetails({
                ...chefDetails,
                location: event,
              })
            }
          >
            <option
              value="Italian"
              selectInput={(event) =>
                setChefDetails({
                  ...chefDetails,
                  Location: event,
                })
              }
            >
              Italian
            </option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="Michelin">Michelin</option>
            <option value="Thai">Thai</option>
            <option value="Japanese">Japanese</option>
            <option value="Curry">Curry</option>
            <option value="Caribean">Caribean</option>
          </select>
        </div>
      </section>

      {/* <InputLabel labelName="Cuisines" />

      <InputField type="checkbox" />
      <InputLabel labelName="Italian" />

      <InputField type="checkbox" />
      <InputLabel labelName="Thai" />

      <InputField type="checkbox" />
      <InputLabel labelName="Indian" />

      <InputField type="checkbox" />
      <InputLabel labelName="Spanish" />

      <InputField type="checkbox" />
      <InputLabel labelName="Indian" /> */}

      {/* <InputField
        type="submit"
        handleclick={() => {
          addChefToDb();
        }}
      /> */}

      <Button
        btnText="Submit (DB)"
        handleclick={() => {
          addChefToDb();
        }}
      />
    </>
  );
};

export default ChefSignUpPage;
