import React, { useState } from "react";
import styles from "./ChefSignUpPage.module.scss";
import InputField from "../../components/InputField";
import InputLabel from "../../components/InputLabel";
import firestore from "../../firebase";
import Button from "../../components/Button";

const ChefSignUpPage = (props) => {
  const { signIn, signOut, user, addToDb, handleInput, addChefToDb } = props;

  const [chefDetails, setChefDetails] = useState({});

  console.log(chefDetails);

  return (
    <>
      {/* <Button btnText="Log In" handleclick={signIn} />
      <Button btnText="Log Out" handleclick={signOut} /> */}

      <Button
        btnText="DB ADD"
        handleclick={() => {
          addToDb();
        }}
      />

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
            FirstName: event,
          })
        }
      />

      <InputLabel labelName="Last name" />
      <InputField
        type="text"
        placeholder="Smith"
        selectInput={(event) =>
          setChefDetails({
            ...chefDetails,
            LastName: event,
          })
        }
      />

      <InputLabel labelName="Locations" />
      <InputField
        type="text"
        placeholder="Bristol"
        selectInput={(event) =>
          setChefDetails({
            ...chefDetails,
            Location: event,
          })
        }
      />

      <InputLabel labelName="Cuisines" />

      <InputField type="checkbox" />
      <InputLabel labelName="Italian" />

      <InputField type="checkbox" />
      <InputLabel labelName="Thai" />

      <InputField type="checkbox" />
      <InputLabel labelName="Indian" />

      <InputField type="checkbox" />
      <InputLabel labelName="Spanish" />

      <InputField type="checkbox" />
      <InputLabel labelName="Indian" />

      <InputField
        type="submit"
        handleclick={() => {
          addChefToDb({ chefDetails });
        }}
      />

      <Button
        btnText="Add chef to Db"
        handleclick={() => {
          addChefToDb();
        }}
      />
    </>
  );
};

export default ChefSignUpPage;
