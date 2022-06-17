import { React, useState } from "react";
import styles from "../css/FormInput.module.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className={styles.form}>
      <label className={styles.formLabel}>{label}</label>
      <input className={styles.formField} {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} />
      <span>{errorMessage}</span>
    </div>
  );
}

export default FormInput;