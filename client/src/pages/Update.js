import { useState } from "react";
import Frame from "../components/Frame";
import BasicForm from "../components/BasicForm";

function Update() {

  const [email, setEmail] = useState("")
  console.log(email);

  const formStyle = {
    margin: "18px auto 0 auto",
    width: "300px"
  }

  return (
    <div>
      <Frame h1="Updating Form" h2="Please check your record in the system" />
      <form style={formStyle} action="#" method="post">
        <BasicForm label="Email" placeholder="Email" setEmail={setEmail}/>
        <BasicForm label="Date of Birth" placeholder="Date" />
      </form>
    </div>
  );
}

export default Update;