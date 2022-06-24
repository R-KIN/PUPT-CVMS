import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Frame.module.css";

const Frame = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      <div className={styles.bar}></div>
      <button className={[styles.logo, styles.center].join(' ')} onClick={() => { navigate("/"); }} type="button"></button>
      <h1 className={[styles.title, styles.center].join(' ')}>{props.h1}</h1>
      <h2 className={[styles.subtitle, styles.center].join(' ')}>{props.h2}</h2>
    </div>
  );
}

export default Frame;