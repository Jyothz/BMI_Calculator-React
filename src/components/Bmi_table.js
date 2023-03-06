import './Bmi_table.css'
function Bmi_table() {
  return (
    <div className = 'table_container'>
      <h3>BMI Table</h3>
      <div className = 'table_box'>
        <table className='table'>
          <tr>
            <th>BMI</th>
            <th>BMI Type</th>
          </tr>
          <tr>
            <td>less than 18.50</td>
            <td>Underweight</td>
          </tr>
          <tr>
            <td>18.50 to 24.90</td>
            <td>Normal</td>
          </tr>
          <tr>
            <td>24.90 to 29.90</td>
            <td>Overweight</td>
          </tr>
          <tr>
            <td>29.90 to 34.90</td>
            <td>Obesity Class 1</td>
          </tr>
          <tr>
            <td>34.90 to 39.90</td>
            <td>Obesity Class 2</td>
          </tr>
          <tr>
            <td>39.90 and greater</td>
            <td>Obesity Class 3</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Bmi_table
