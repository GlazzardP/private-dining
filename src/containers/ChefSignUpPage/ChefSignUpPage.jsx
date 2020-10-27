import React, { useState } from "react";
import styles from "./ChefSignUpPage.module.scss";
import InputField from "../../components/InputField";
import InputLabel from "../../components/InputLabel";
import { firestore, storage } from "../../firebase";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";

const ChefSignUpPage = (props) => {
  const { user, addUserToDb, handleInput, fetchUserData, onChange } = props;

  const [chefDetails, setChefDetails] = useState({});

  const [image, setImage] = useState(null);
  // const [progress, setProgress] = useState();
  const [url, setUrl] = useState();

  console.log(chefDetails);

  const addChefToDb = () => {
    firestore
      .collection("chefs")
      .doc(user.uid)
      .set(chefDetails)
      .then(() => {
        handleUpload();
      })
      .then(() => {
        fetchUserData();
      })
      .catch((error) => console.log(error));
  };

  const fileSelectHandler = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      // console.log(event.target.files[0]);
    } else {
      return console.log("Issue with file selector");
    }
  };

  console.log(image);

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //   const progress = Math.round(
        //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        //   );
        //   // setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  const imageJsx = url ? <img src url={url} /> : null;

  // const signInOutJsx = user ? (
  //   <Button btnText="Log Out" handleclick={signOut} />
  // ) : (
  //   <Button btnText="Log In" handleclick={signIn} />
  // );

  return (
    <>
      <section className={styles.availableChefs}>
        <div>
          <InputForm type="file" onChange={fileSelectHandler} />
        </div>
        {/* <img src={url} alt="Test" /> */}
        {imageJsx}
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
                location: [event],
              })
            }
          />
        </div>

        {/* <div>
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
        </div> */}

        <div>
          <InputLabel labelName="How many courses will you cook? " />
          <InputField
            type="number"
            placeholder="3"
            selectInput={(event) =>
              setChefDetails({
                ...chefDetails,
                courses: event,
              })
            }
          />
        </div>

        <div>
          <InputLabel labelName="What cuisine are you happy to cook?" />
        </div>
        <div>
          {/* <InputLabel labelName="Chinese" /> */}
          <InputField type="text" placeholder=" French" />
          <Button btnText="add" />
          {/* <InputLabel labelName="French" />
          <InputField type="checkbox" />
          <InputLabel labelName="Italian" />
          <InputField type="checkbox" />
          <InputLabel labelName="Spanish" />
          <InputField type="checkbox" /> */}
        </div>

        <div>
          <InputField
            type="textarea"
            placeholder=" Tell use a little about yourself"
            selectInput={(event) =>
              setChefDetails({
                ...chefDetails,
                bio: event,
              })
            }
            className={styles.aboutMe}
          />
        </div>

        <div>
          <InputLabel labelName="Will you accept last minute bookings, this is within 48 of the event?" />
        </div>
        <div>
          <InputLabel labelName="Yes" />
          <InputField type="radio" name="bookings" />
          <InputLabel labelName="No" />
          <InputField type="radio" name="bookings" />
        </div>

        <div>
          <InputLabel labelName="Will you bring your own kitchen equipment? e.g. pots and pans" />
        </div>
        <div>
          <InputLabel labelName="Yes" />
          <InputField type="radio" />
          <InputLabel labelName="No" />
          <InputField type="radio" />
        </div>

        <div>
          <InputLabel labelName="Please tick if you ARE happy to make these types of meals? " />
        </div>

        <div>
          <InputLabel labelName="Veggie" />
          <InputField type="checkbox" />
          <InputLabel labelName="Vegan" />
          <InputField type="checkbox" />
          <InputLabel labelName="Gluten Free" />
          <InputField type="checkbox" />
          <InputLabel labelName="Nut free" />
          <InputField type="checkbox" />
        </div>
        <Button
          btnText="Submit (DB)"
          handleclick={() => {
            addChefToDb();
          }}
        />
      </section>
    </>
  );
};

export default ChefSignUpPage;
