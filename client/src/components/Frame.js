import React from "react";
import styles from "../css/Frame.module.css";

const Frame = (props) => {
  return (
    <div>
      <div className={styles.bar}></div>
      <img className={[styles.logo, styles.center].join(' ')} src="/logo.png" alt="pup taguig logo" />
      <h1 className={styles.center}>{props.h1}</h1>
      <h2 className={styles.center}>{props.h2}</h2>
    </div>
  );
}

export default Frame;