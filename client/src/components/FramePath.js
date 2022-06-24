import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/FramePath.module.css";

const FramePath = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      <div className={styles.bar}></div>
      <button className={styles.logo} onClick={() => { navigate("/"); }} type="button"></button>
      <h1 className={styles.path}>{props.h1}</h1>
      <h2 className={styles.subpath}>{props.h2}</h2>
    </div>
  );
}

export default FramePath;