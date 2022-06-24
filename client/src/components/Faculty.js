import React from "react";
import styles from "../css/Vaccine.module.css";
import FramePath from "../components/FramePath";
import { motion } from "framer-motion";

const Faculty = ({ confirmStep, onChange, prevStep, values}) => {
  values.course="";
  values.yearsection="";

  const handleSubmit = (e) => {
    e.preventDefault();
    confirmStep();
    /* const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries())); */
  };

  //console.log(values);

  return (
    <motion.div initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}>
      <FramePath h1="New Form | COVID Vaccination Profile" h2="Please enter the following information" />
      <form className={styles.form} action="http://localhost:3000/api" method="post" onSubmit={handleSubmit}>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Regular or Part Time</label>
          <select
          className={styles.formField}
          name="tempstatus"
          value={values.tempstatus}
          onChange={onChange}
          required={true}
          >
            <option value="" disabled>Select...</option>
            <option value="Regular">Regular</option>
            <option value="PartTime">Part Time</option>
          </select>
        </div>
        <div className={styles.formDiv}>
          <label className={styles.formLabel}>Admin or Casual</label>
          <select
          className={styles.formField}
          name="stayduration"
          value={values.stayduration}
          onChange={onChange}
          required={true}
          >
            <option value="" disabled>Select...</option>
            <option value="Admin">Admin</option>
            <option value="Casual">Casual</option>
          </select>
        </div>
        <div className={styles.formFill}></div>
        <div className={styles.formConfirm}>
          <label className={styles.formLabel}>Have you been vaccinated? (If not applicable, leave blank)</label>
          <div className={styles.formDivRadio}>
            <label className={styles.formLabel}>
              Yes
              <input 
              className={styles.formRadio}
              type="radio"
              name="vaccinestatus"
              value={true}
              onChange={onChange}
              required={true}
              />
            </label>
            <label className={styles.formLabel}>
              No
              <input 
              className={styles.formRadio}
              type="radio"
              name="vaccinestatus"
              value={false}
              onChange={onChange}
              required={true}
              />
            </label>
          </div>
        </div>
        <div className={styles.formVaccine}>
          <div className={styles.formVaccineChild}>
            <label className={styles.formLabel}>Vaccine Name</label>
            <select
            className={styles.formField}
            name="vaccinename"
            value={values.vaccinename}
            onChange={onChange}
            required={false}
            >
              <option value="" disabled>Select a vaccine...</option>
              <option value="Moderna">Moderna</option>
              <option value="Pfizer">Pfizer</option>
              <option value="Sinovac">Sinovac</option>
              <option value="AstraZeneca">AstraZeneca</option>
              <option value="Johnson&Johnson">Johnson & Johnson</option>
              <option value="Sputnik">Sputnik</option>
            </select>
          </div>
          <div className={styles.formVaccineChild}>
            <label className={styles.formLabel}>First Dose</label>
            <input 
            className={styles.formField}
            type="date"
            name="firstdose"
            defaultValue={values.firstdose}
            onChange={onChange} 
            required={false}
            />
          </div>
          <div className={styles.formVaccineChild}>
            <label className={styles.formLabel}>Second Dose</label>
            <input 
            className={styles.formField}
            type="date"
            name="seconddose"
            defaultValue={values.seconddose}
            onChange={onChange} 
            required={false}
            />
          </div>
        </div>
        <div className={styles.formConfirm}>
          <label className={styles.formLabel}>Have you had your booster? (If not applicable, leave blank)</label>
          <div className={styles.formDivRadio}>
            <label className={styles.formLabel}>
              Yes
              <input 
              className={styles.formRadio}
              type="radio"
              name="boosterstatus"
              value={true}
              onChange={onChange}
              required={true}
              />
            </label>
            <label className={styles.formLabel}>
              No
              <input 
              className={styles.formRadio}
              type="radio"
              name="boosterstatus"
              value={false}
              onChange={onChange}
              required={true}
              />
            </label>
          </div>
        </div>
        <div className={styles.formVaccine}>
          <div className={styles.formVaccineChild}>
            <label className={styles.formLabel}>Booster Name</label>
            <select
            className={styles.formField}
            name="boostername"
            value={values.boostername}
            onChange={onChange}
            required={false}
            >
              <option value="" disabled>Select a vaccine...</option>
              <option value="Moderna">Moderna</option>
              <option value="Pfizer">Pfizer</option>
              <option value="Sinovac">Sinovac</option>
              <option value="AstraZeneca">AstraZeneca</option>
              <option value="Johnson&Johnson">Johnson & Johnson</option>
              <option value="Sputnik">Sputnik</option>
            </select>
          </div>
          <div className={styles.formVaccineChild}>
            <label className={styles.formLabel}>Booster Date</label>
            <input 
            className={styles.formField}
            type="date"
            name="boosterdate"
            defaultValue={values.boosterdate}
            onChange={onChange} 
            required={false}
            />  
          </div>
        </div>
        <div className={styles.formLegal}>
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
        <div className={styles.buttonDiv}>
          <button className={styles.button} onClick={prevStep}>Back</button>
          <button className={styles.button} type="submit">Submit</button>
        </div>
      </form>
  </motion.div>
  );
}

export default Faculty;