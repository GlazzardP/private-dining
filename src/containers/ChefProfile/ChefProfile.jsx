import React from "react";
import styles from "./ChefProfile.module.scss";

const ChefProfile = (props) => {
  const { image, chefName, chefCuisines, chefArea } = props;
  return (
    <div className={styles.ChefProfile}>
      <div>
        <img src={image} alt={chefName} />
      </div>
      <div>
        <h3>{chefName}</h3>
        <p>{chefArea}</p>
        <p>Cuisine: {chefCuisines}</p>
        <p>4/5</p>
      </div>
    </div>
  );
};

export default ChefProfile;
