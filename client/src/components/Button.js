import React from "react";
import styles from "../css/Button.module.css";
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  let navigate = useNavigate();
  return (
    <button className={[styles.button, styles.center].join(' ')} onClick={() => { navigate(`${props.path}`); }} type="button">{props.label}</button>
  );
}

export default Button;