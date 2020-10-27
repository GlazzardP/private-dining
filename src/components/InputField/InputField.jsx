import React from "react";
import styles from "./InputField.module.scss";

const InputField = (props) => {
  const { placeholder, type, handleInput, selectInput, value } = props;

  return (
    <input
      placeholder={placeholder}
      type={type}
      className={styles.InputField}
      onChange={handleInput}
      // onInput={(event) => selectInput(event.target.value)}
      value={value}
    />
  );
};

export default InputField;
