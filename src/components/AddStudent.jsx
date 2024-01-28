import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { addStudent } from "../redux/studentSlice/actions"


function AddStudent({toggleForm}) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()

  
  // console.log(firstName, lastName, email)

  const handleAddStudent = () => {
    dispatch(addStudent({
      first_name: firstName, 
      last_name: lastName, 
      email: email
    }))
    toggleForm("Close add")
  }
  
  return (
    <section className="addStudentForm card" >
      <div className="card-header">
        <h2>Add Student</h2>
        <div className="action-buttons">
          <button className="cancel" onClick={() => toggleForm("Close add")}>Cancel</button>
          <button className="add" onClick={handleAddStudent}>Add</button>
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