import React, { useState } from "react";
import styles from "./AvailableChefs.module.scss";
import ChefProfile from "../ChefProfile";
import InputLabel from "../../components/InputLabel";
import InputField from "../../components/InputField";

const AvailableChefs = () => {
  const [formValues, setFormValues] = useState({});

  return (
    <section className={styles.AvailableChefs}>
      <section className={styles.availableSearch}>
        <div className={styles.availabilityForm}>
          <div>
            <InputLabel labelName="No. of people" />
            <InputField
              type="number"
              placeholder="6"
              selectInput={(event) =>
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
              selectInput={(event) =>
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
              selectInput={(event) =>
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
  );
};

export default AvailableChefs;
