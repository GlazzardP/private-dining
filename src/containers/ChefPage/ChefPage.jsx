import React from "react";
import styles from "./ChefPage.module.scss";
import ChefProfile from "../ChefProfile";

const ChefPage = (props) => {
  const {
    name,
    bookings,
    location,
    selectedChef,
    toggleSelectedChef,
    chefName,
    chefObject,
  } = props;
  return (
    <>
      {/* <h2>{chefObject.name}</h2> */}
      <p>{bookings}</p>
      <p>{location}</p>
      {/* <p>{reviewsJsx}</p> */}
      <p>{chefName}</p>
    </>
  );
};

export default ChefPage;
