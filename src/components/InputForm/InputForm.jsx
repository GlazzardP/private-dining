import React from "react";
import styles from "./InputForm.module.scss";

const InputForm = (props) => {
  const { onChange } = props;
  return <input onChange={onChange} type="file" />;
};

export default InputForm;
