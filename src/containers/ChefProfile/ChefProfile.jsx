import React from "react";
import styles from "./ChefProfile.module.scss";
import Button from "../../components/Button";

const ChefProfile = (props) => {
  const { image, chefName, courses, chefArea, minGuests, maxGuests } = props;
  return (
    <div className={styles.ChefProfile}>
      {/* <div> */}
      {/* <img src={image} alt={chefName} /> */}
      {/* </div> */}
      <div>
        <h3>{chefName}</h3>
        <p>Location: {chefArea}</p>
        <p>Recommended courses: {courses}</p>
        <p>
          Guests: {minGuests} - {maxGuests}
        </p>
        <p>Price: £60 - £100</p>
        <p>4/5</p>

        <Button btnText="Profile" />
      </div>
    </div>
  );
};

export default ChefProfile;
