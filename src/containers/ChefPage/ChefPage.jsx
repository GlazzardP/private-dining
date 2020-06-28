import React from "react";
import styles from "./ChefPage.module.scss";
import ChefProfile from "../ChefProfile";

const ChefPage = (props) => {
  const { selectedChef, chef } = props;

  console.log(selectedChef);

  return (
    <>
      {/* <h2>{chefObject.name}</h2> */}
      <p>Bookings: {selectedChef.bookings}</p>
      <p>Location: {selectedChef.location}</p>
      {/* <p>{reviewsJsx}</p> */}
      <p>Name:{selectedChef.chefName}</p>
    </>
  );
};

export default ChefPage;
