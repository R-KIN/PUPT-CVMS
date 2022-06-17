import React from "react";
import styles from "../css/New.module.css";
import FramePath from "../components/FramePath";
import { motion } from "framer-motion";

const Personal = ({ nextStep, onChange, values}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
    /* const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries())); */
  };

  // console.log(values);

  return (
    <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}>
      <FramePath h1="New Form | Personal Profile" h2="Please enter the following information" />
      <form className={styles.form} action="#" method="post" onSubmit={handleSubmit}>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>First Name</label>
          <input 
          className={styles.formField}
          type="text"
          name="firstname"
          defaultValue={values.firstname}
          onChange={onChange} 
          required={true}
          />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Middle Initial</label>
          <input 
          className={styles.formField}
          type="text"
          name="middleinitial"
          defaultValue={values.middleinitial}
          onChange={onChange} 
          />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Last Name</label>
          <input 
          className={styles.formField}
          type="text"
          name="lastname"
          defaultValue={values.lastname}
          onChange={onChange} 
          required={true}
          />
        </div>
        <div className={styles.formDiv}></div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>I am a PUPT...</label>
          <select
          className={styles.formField}
          name="status"
          value={values.status}
          onChange={onChange}
          required={true}
          >
            <option value="" disabled>Select...</option>
            <option value="Student">Student</option>
            <option value="Faculty">Faculty</option>
          </select>
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Date of Birth</label>
          <input 
          className={styles.formField}
          type="date"
          name="dateofbirth"
          defaultValue={values.dateofbirth}
          onChange={onChange} 
          required={true}
          />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Sex</label>
          <div className={styles.formDivRadio}>
            <label className={styles.formLabelRadio}>
              Male
              <input 
              className={styles.formRadio}
              type="radio"
              name="sex"
              value="male"
              checked={values.sex === "male"}
              onChange={onChange}
              required={true}
              />
            </label>
            <label className={styles.formLabelRadio}>
              Female
              <input 
              className={styles.formRadio}
              type="radio"
              name="sex"
              value="female"
              checked={values.sex === "female"}
              onChange={onChange}
              required={true}
              />
            </label>
          </div>
        </div>
        <div className={styles.formDiv}></div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Facebook Link</label>
          <input 
          className={styles.formField}
          type="text"
          name="fblink"
          defaultValue={values.fblink}
          placeholder="https://facebook.com/"
          onChange={onChange} 
          required={true}
          />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Email Address</label>
          <input 
          className={styles.formField}
          type="email"
          name="email"
          defaultValue={values.email}
          onChange={onChange} 
          required={true}
          />
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Contact Number</label>
          <input 
          className={styles.formField}
          type="text"
          name="contactnumber"
          defaultValue={values.contactnumber}
          placeholder="09 -"
          onChange={onChange} 
          required={true}
          />
        </div>        
        <div className={styles.formDiv}></div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Address</label>
          <input
          className={styles.formAddress}
          type="text"
          name="address"
          defaultValue={values.address}
          onChange={onChange}
          required={true}
          />
        </div>
        <div className={styles.formDivConfirm}>
          <input
          className={styles.formRadio}
          type="radio"
          name="confirm"
          value="OK"
          checked={values.confirm === "OK"}
          onChange={onChange}
          required={true}
          />
          <label className={styles.formLabel}>I hereby attest that the information I will provide
          in this document are true and correct to the best of my knowledge and understand that any dishonest
          answer may have serious legal and public health implications under RA 11332.
          </label>
        </div>
        <button className={styles.button} type="submit">Continue</button>
      </form>
  </motion.div>
  );
}

export default Personal;