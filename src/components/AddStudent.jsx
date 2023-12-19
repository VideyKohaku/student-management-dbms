import React, {useState} from "react"
import axios from "axios"


function AddStudent({toggleForm}) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  // cosnt []
  
  console.log(firstName, lastName, email)

  const addStudent = async () => {
    try{
      const res = await axios.post("http://localhost:3000/api/v1/students/", {
        first_name: firstName,
        last_name: lastName,
        email: email
      })

      console.log(res)
    } catch (err) {
      console.log(err)
    }

  }
  
  return (
    <section className="addStudentForm card" >
      <div className="card-header">
        <h2>Add Student</h2>
        <div className="action-buttons">
          <button className="cancel" onClick={() => toggleForm("Close add")}>Cancel</button>
          <button className="add" onClick={addStudent}>Add</button>
        </div>
      </div>
      <div className="card-body">
        {/* <!-- Add student form goes here --> */}
        <div className="form-group">
          <label htmlFor="FN">First Name:</label>
          <input type="text" className="FN" onChange={(e) => {
            setFirstName(e.target.value)
          }}/>
          <label htmlFor="LN">Last Name:</label>
          <input type="text" className="LN" onChange={(e) => {
            setLastName(e.target.value)
          }}/>
          <label htmlFor="Em">Email:</label>
          <input type="text" className="Em" onChange={(e) => {
            setEmail(e.target.value)
          }}/>
        </div>
      </div>
    </section>

  )
}

export default AddStudent