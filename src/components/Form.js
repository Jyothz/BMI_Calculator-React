import { useState } from "react";
import "./Form.css";

function Form({getData}) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const onSubmit = (e) => {
    
    getData(weight,height)
  };
  return (
    <div className="Container">
      <h3>Calculate Your BMI !</h3>
      <div>
        <input type="Number" value={height}
          onChange={(e) => setHeight(e.target.value)} placeholder=" Enter Your Height in cm" id="box" />
        <input
          type="Number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder=" Enter Your Weight in Kg"
          id="box"
        />
      </div>
      <button className="Button" onClick={onSubmit}>
        SUBMIT
      </button>
    </div>
  );
}

export default Form;
