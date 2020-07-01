import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { btnText, handleClick } = props;
  return (
    <div className={styles.Button}>
      <p onClick={handleClick}>{btnText}</p>
    </div>
  );
};

export default Button;
