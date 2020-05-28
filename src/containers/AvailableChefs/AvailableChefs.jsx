import React, { useState } from "react";
import firebase from "../../firebase";
import styles from "./AvailableChefs.module.scss";
import ChefProfile from "../ChefProfile";
import InputLabel from "../../components/InputLabel";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import firestore from "../../firebase";

const AvailableChefs = (props) => {
  const { signIn, signOut, user, addToDb } = props;
  const [formValues, setFormValues] = useState({});

  const userJsx = user ? <p>User exist</p> : <p>Nope</p>;

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

      {userJsx}
      <section className={styles.AvailableChefs}>
        <section className={styles.availableSearch}>
          <div className={styles.availabilityForm}>
            <div>
              <InputLabel labelName="No. of people" />
              <InputField
                type="number"
                placeholder="6"
                handleInput={(event) =>
                  setFormValues({ ...formValues, attendees: event })
                }
              />
            </div>

            <div>
              <InputLabel labelName="Min-price" />
              <InputField
                type="number"
                placeholder="100"
                // value="min price"
                handleInput={(event) =>
                  setFormValues({ ...formValues, price: event })
                }
              />
            </div>

            <div>
              <InputLabel labelName="Max-price" />
              <InputField
                type="number"
                placeholder="600"
                // value="max price"
                handleInput={(event) =>
                  setFormValues({ ...formValues, price2: event })
                }
              />
            </div>

            <div>
              <InputLabel labelName="Where?" />
              <InputField
                type="text"
                placeholder="location"
                // value="location"
                selectInput={(event) =>
                  setFormValues({ ...formValues, location: event })
                }
              />
            </div>

            <p>Star Rating</p>

            <InputField type="submit" />
          </div>
        </section>

        <section>
          <ChefProfile
            // image={gino}
            chefCuisines="Italian, French and Thai"
            chefName="Gino"
            chefArea="Bristol, Sardinia, Rome"
          />
          <ChefProfile
            // image={gino}
            chefCuisines="Italian, French and Thai"
            chefName="Gino"
            chefArea="Bristol, Sardinia, Rome"
          />
          <ChefProfile
            // image={gino}
            chefCuisines="Italian, French and Thai"
            chefName="Gino"
            chefArea="Bristol, Sardinia, Rome"
          />
        </section>
      </section>
    </>
  );
};

export default AvailableChefs;
