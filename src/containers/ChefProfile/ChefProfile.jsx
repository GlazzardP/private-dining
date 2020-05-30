import React from "react";
import styles from "./ChefProfile.module.scss";
import Button from "../../components/Button";

const ChefProfile = (props) => {
  const { image, chefName, chefCuisines, chefArea } = props;
  return (
    <div className={styles.ChefProfile}>
      {/* <div> */}
      <img src={image} alt={chefName} />
      {/* </div> */}
      <div>
        <h3>{chefName}</h3>
        <p>{chefArea}</p>
        <p>Cuisine: {chefCuisines}</p>
        <p>Price: £60 - £100</p>
        <p>4/5</p>

        <Button btnText="Profile" />
      </div>
    </div>
  );
};

export default ChefProfile;
