import { useState } from "react";
import styles from "../css/Form.module.css";
import Frame from "../components/Frame";
import FormInput from "../components/FormInput";
import { motion } from "framer-motion";

function Update() {
  const [values, setValues] = useState({
    email:"",
    dateofbirth: "",
  });

  const inputs = [
    {
      id: 1,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"Please enter your email address",
      label:"Email",
      required: true
    },
    {
      id: 2,
      name:"dateofbirth",
      type:"date",
      placeholder:"MM/DD/YY",
      errorMessage:"Please enter your date of birth",
      label:"Date of Birth",
      required: true
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()));
  }

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <motion.div initial={{opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: -10}}>
      <Frame h1="Updating Form" h2="Please check your record in the system" />
      <form action="#" method="post" onSubmit={handleSubmit}>
        {inputs.map(input=> (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button className={styles.submitButton} type="submit">Continue</button>
      </form>
    </motion.div>
  );
}

export default Update;