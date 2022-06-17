import React from "react";
import styles from "../css/New.module.css";
import FramePath from "../components/FramePath";
import { motion } from "framer-motion";

const Student = ({ nextStep, onChange, prevStep, values}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
    /* const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries())); */
  };

  //console.log(values);

  return (
    <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}>
      <FramePath h1="New Form | COVID Vaccination Profile" h2="Please enter the following information" />
      <form className={styles.form} action="#" method="post" onSubmit={handleSubmit}>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Course</label>
          <select
          className={styles.formField}
          name="course"
          value={values.course}
          onChange={onChange}
          required={true}
          >
            <option value="" disabled>Select a course...</option>
            <option value="BSA">BS Accountancy</option>
            <option value="ECE">BS Electronics Engineering</option>
            <option value="ME">BS Mechanical Engineering</option>
            <option value="HRM">BSBA Human Resource Development Management</option>
            <option value="MM">BSBA Marketing Management</option>
            <option value="BSOA">BS Office Administration</option>
            <option value="EDENG">BSED English</option>
            <option value="EDMATH">BSED Mathematics</option>
            <option value="IT">BS Information Technology</option>
            <option value="DOMT">Diploma in Office Management Technology</option>
            <option value="DICT">Diploma in Information Communication Technology</option>
          </select>
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Course</label>
          <select
          className={styles.formField}
          name="yearsection"
          value={values.yearsection}
          onChange={onChange}
          required={true}
          >
            <option value="" disabled>Select a year and section...</option>
            <option value="1-1">1-1</option>
            <option value="2-1">2-1</option>
            <option value="3-1">3-1</option>
            <option value="4-1">4-1</option>
            <option value="5-1">5-1</option>
          </select>
        </div>
        <div className={styles.formDivConfirm}>
          <input
          className={styles.formRadio}
          type="radio"
          name="confirm"
          value="OK"
          checked={values.confirm === "OK"}
          onChange={onChange}
          />
          <label className={styles.formLabel}>I hereby attest that the information I will provide
          in this document are true and correct to the best of my knowledge and understand that any dishonest
          answer may have serious legal and public health implications under RA 11332.
          </label>
        </div>
        <button className={styles.button} onClick={prevStep}>Back</button>
        <button className={styles.button} type="submit">Continue</button>
      </form>
  </motion.div>
  );
}

export default Student;