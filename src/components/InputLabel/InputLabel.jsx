import React from "react";
import styles from "./InputLabel.module.scss";

const InputLabel = (props) => {
  const { labelName } = props;
  return (
    <>
      <label htmlFor={labelName}>{labelName}</label>
    </>
  );
};

export default InputLabel;
