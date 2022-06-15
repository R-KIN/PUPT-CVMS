import React from "react";
import styles from "../css/Home.module.css";
import Frame from "../components/Frame";
import Button from "../components/Button";


function Home() {
  return (
    <div>
      <Frame h1="Student & Faculty COVID-Vaccination Record" h2="Polytechnic University of the Philippines Taguig" />
      <Button label="Answer Form"/>
      <Button label="Login as Admin"/>
      <footer className={[styles.tos, styles.center].join(' ')}>
        <p>By using this service, you understand and agree to the PUP Online Services <a href="https://www.pup.edu.ph/terms/">Terms of Use</a> and <a href="https://www.pup.edu.ph/privacy/">Privacy Statement.</a></p>
      </footer>
    </div>
  );
}

export default Home;

