import { useState } from "react";
import Personal from "../components/Personal";
import Student from "../components/Student";
import { motion } from "framer-motion";

function New() {
  const [step, setStep] = useState(1);

  const [values, setValues] = useState({
    firstname:"",
    middleinitial:"",
    lastname:"",
    status:"",
    dateofbirth:"",
    sex:"",
    fblink:"",
    email:"",
    contactnumber:"",
    address:"",
    confirm:"",
    course:"",
    yearsection:"",
    vaccinated:"",
    vaccinename:"",
    firstdose:"",
    seconddose:"",
    boostered:"",
    boostername:"",
    boosterdate:"",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  }; 

  /* const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()));
  }
 */
  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  switch(step) {
    case 1:
      return (
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}>
          <Personal nextStep={nextStep} onChange={onChange} values={values} />
        </motion.div>
      );
    case 2:
      return (
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}>
          <Student nextStep={nextStep} prevStep={prevStep} onChange={onChange} values={values} />
        </motion.div>
      );
    case 3:
      return (
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}>
        </motion.div>
      );
    default:
      return (
        <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}>
        </motion.div>
      );
  }
}

export default New;