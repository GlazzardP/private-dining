import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { btnText, handleclick } = props;
  return (
    <div className={styles.Button}>
      <p onClick={handleclick}>{btnText}</p>
    </div>
  );
};

export default Button;
