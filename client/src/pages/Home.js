import React from "react";
import styles from "../css/Home.module.css";
import Frame from "../components/Frame";
import Button from "../components/Button";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}>
      <Frame h1="Student & Faculty COVID-Vaccination Record" h2="Polytechnic University of the Philippines Taguig" />
      <Button path="/Welcome" label="Answer Form"/>
      <Button path="/Login" label="Login as Admin"/>
      <footer className={[styles.tos, styles.center].join(' ')}>
        <p>By using this service, you understand and agree to the PUP Online Services <a href="https://www.pup.edu.ph/terms/">Terms of Use</a> and <a href="https://www.pup.edu.ph/privacy/">Privacy Statement.</a></p>
      </footer>
    </motion.div>
  );
}

export default Home;

