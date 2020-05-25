import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  const { btnText } = props;
  return (
    <div className={styles.Button}>
      <p>{btnText}</p>
    </div>
  );
};

export default Button;
