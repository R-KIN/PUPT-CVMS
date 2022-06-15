import React from "react";
import styles from "../css/BasicForm.module.css";

const BasicForm = (props) => {
  return (
    <div className={styles.formInput}>
      <label>{props.label}</label>
      <input placeholder={props.placeholder} onChange={e=>props.setEmail(e.target.value)} />
    </div>
  );
}

export default BasicForm;