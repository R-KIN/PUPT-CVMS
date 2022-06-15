import React from "react";
import styles from "../css/Home.module.css";


function Error() {
  return (
    <div>
      <div className={styles.bar}></div>
      <img className={[styles.logo, styles.center].join(' ')} src="/logo.png" alt="pup taguig logo" />
      <h1 className={styles.center}>Student & Faculty COVID-Vaccination Record</h1>
      <h2 className={styles.center}>Hey!!!</h2>
      <footer className={[styles.tos, styles.center].join(' ')}>
        <p>By using this service, you understand and agree to the PUP Online Services <a href="https://www.pup.edu.ph/terms/">Terms of Use</a> and <a href="https://www.pup.edu.ph/privacy/">Privacy Statement.</a></p>
      </footer>
    </div>
  );
}

export default Error;