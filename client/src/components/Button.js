import React from "react";
import styles from "../css/Button.module.css";

const Button = (props) => {

  const test = () => {
    console.log("button working...");
  }

  return (
    <button className={[styles.button, styles.center].join(' ')} onClick={test} type="button">{props.label}</button>
  );
}

export default Button;