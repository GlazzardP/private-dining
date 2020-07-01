import React from "react";
import styles from "./ChefPage.module.scss";
import ChefProfile from "../ChefProfile";

const ChefPage = (props) => {
  const { selectedChef } = props;

  return (
    <>
      <h2>{selectedChef.name}</h2>

      <p>Name:{selectedChef.firstName}</p>

      <p>Location: {selectedChef.location}</p>
      {/* <p>{reviewsJsx}</p> */}
      <p>
        Guests: {selectedChef.minGuests} - {selectedChef.maxGuests}
      </p>
      <p>{selectedChef.bio}</p>
    </>
  );
};

export default ChefPage;
