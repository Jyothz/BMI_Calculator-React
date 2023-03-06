
import './App.css';
import Form from './components/Form';
import Table from './components/Bmi_table';
import Result from './components/Bmi_result';
import { useState } from 'react';

function App() {
const [bmi , setBmi] = useState("24.00")
const [type , setType] = useState("Normal")
  const getBmi = (w,h) =>{
    let bVal = bmiValue(w,h)
    setBmi(bVal)
    let bType = weightType(bVal)
    setType(bType)
  }
  const bmiValue = (w,h) => {
    const heightMeter = h / 100
    const heightVal = heightMeter * heightMeter ;
    const bmiVal = (w/heightVal).toFixed(2)
    return bmiVal
  }
  const weightType = (bmiVal) => {
    if(bmiVal < 18.50){ return "Underweight";
    }else if(18.50 < bmiVal && bmiVal < 24.90) { return "Normal";
    }else if(24.90 < bmiVal && bmiVal < 29.90) {return "Overweight";
    }else if(29.90 < bmiVal && bmiVal < 34.9) {return "Obesity Class 1";
    }else if(34.90 < bmiVal && bmiVal < 39.90) {return "Obesity Class 2";
    }else if(39.90 < bmiVal) {return "Obesity Class 3";
    }
  };
  return (
    <>
<Form getData = {getBmi}/>
<Result bmiNo = {bmi} bmiType = {type}/>
<Table/>

    </>
  );
}

export default App;
