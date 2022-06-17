import React from "react";
import styles from "../css/FramePath.module.css";

const FramePath = (props) => {
  return (
    <div>
      <div className={styles.bar}></div>
      <img className={styles.logo} src="/logo.png" alt="pup taguig logo" />
      <h1 className={styles.path}>{props.h1}</h1>
      <h2 className={styles.subpath}>{props.h2}</h2>
    </div>
  );
}

export default FramePath;