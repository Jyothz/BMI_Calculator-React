import './Bmi_result.css'
function Bmi_result(props) {

  const bmiVal = props.bmiNo
  const bmiType = props.bmiType
  return (
    <div className = 'result_container'>
     <h3>Your BMI Result</h3> 
    <h4>Your BMI score is : </h4>
     <div className='result_box'>
     {bmiVal}
     </div>
     <div>
     <h4>Your BMI Type is : </h4>
     {bmiType}
     </div>
    </div>
  )
}
export default Bmi_result
