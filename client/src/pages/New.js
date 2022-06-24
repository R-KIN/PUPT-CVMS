import { useState } from "react";
import Personal from "../components/Personal";
import Student from "../components/Student";
import Faculty from "../components/Faculty";

function New() {
  const [step, setStep] = useState("personal");

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
    tempstatus:"",
    stayduration:"",
    vaccinestatus:"",
    vaccinename:"",
    firstdose:"",
    seconddose:"",
    boosterstatus:"",
    boostername:"",
    boosterdate:"",
  });

  const confirmStep = () => {
    setStep("confirmation");
  }

  const facultyStep = () => {
    setStep("faculty");
  }

  const studentStep = () => {
    setStep("student");
  };

  const prevStep = () => {
    setStep("personal");
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
    case "personal":
      return (
          <Personal facultyStep={facultyStep} studentStep={studentStep} onChange={onChange} values={values} />
      );
    case "student":
      return (
          <Student confirmStep={confirmStep} prevStep={prevStep} onChange={onChange} values={values} />
      );
    case "faculty":
      return (
          <Faculty confirmStep={confirmStep} prevStep={prevStep} onChange={onChange} values={values} />
      );
    case "confirmation":
      console.log("done!");
      console.log(values);
      break;
    default:
      // bruh
  }
}

export default New;