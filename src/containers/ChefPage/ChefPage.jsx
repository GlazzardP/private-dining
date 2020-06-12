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
  } = props;
  return (
    <>
      <h2>{name}</h2>
      <p>Previous Bookings:{bookings}</p>
      <p>{location}</p>
      {/* <p>{reviewsJsx}</p> */}
      <p>{chefName}</p>
      <p>Test test test </p>
    </>
  );
};

export default ChefPage;
