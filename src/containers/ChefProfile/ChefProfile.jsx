import React, { useState } from "react";
import styles from "./ChefProfile.module.scss";
import Button from "../../components/Button";
import gino from "../../assets/images/gino.jpeg";

const ChefProfile = (props) => {
  const {
    image,
    chefName,
    courses,
    chefArea,
    minGuests,
    maxGuests,
    toggleSelectedChef,
    chefObject,
    chef,
    selectedChef,
  } = props;

  console.log(selectedChef);
  console.log(chefObject);

  return (
    <div className={styles.ChefProfile}>
      <img src={gino} alt={chefName} />

      <div>
        <h3>{chefName}</h3>
        {/* <p>{chefObject.firstName}</p> */}
        <p>Recommended courses: {courses}</p>
        <p>
          Guests: {minGuests} - {maxGuests}
        </p>
        <p>Price: £60 - £100</p>
        <p>4/5</p>

        {/* <Button btnText="Profile" /> */}
        <Button
          btnText="More Info"
          onClick={() => toggleSelectedChef({ chefObject })}
        />
      </div>
    </div>
  );
};

export default ChefProfile;
