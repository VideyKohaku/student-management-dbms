// import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateStudentAction, fetchStudents } from '../redux/studentSlice/actions'

function UpdateStudent({toggleForm}) {
  const currentUpdateStudent = useSelector(state => state.students.currentUpdateStudent)
  const [toUpdateStudent, setToUpdateStudent] = useState(currentUpdateStudent)
  const dispatch = useDispatch()


  const handleUpdateBtn = () => {
    dispatch(updateStudentAction(toUpdateStudent))
    dispatch(fetchStudents())
    toggleForm("Close update")
  }

  

  const handleOnchange = (e) => {
    console.log("e.target.name", e.target.name)
    setToUpdateStudent({
      ...toUpdateStudent,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="updateStudentForm card" >
      <div className="card-header">
        <h2>Update Student</h2>
        <div className="action-buttons">
          <button className="cancel" onClick={()=>toggleForm("Close update")}>Cancel</button>
          <button className="add" onClick={() => handleUpdateBtn(toUpdateStudent)}>Update</button>
        </div>
      </div>
      <div className="card-body">
        {/* <!-- Update student form goes here --> */}
        {/* <!-- ... similar to the Add Student form ... --> */}
        <div className="form-group">
          <label htmlFor="Update_FN">First Name:</label>
          <input type="text" className="Update_FN" name='first_name' defaultValue={currentUpdateStudent.first_name} onChange={handleOnchange}/>
          <label htmlFor="Update_LN">Last Name:</label>
          <input type="text" className="Update_LN" name='last_name' defaultValue={currentUpdateStudent.last_name} onChange={handleOnchange}/> 
          <label htmlFor="Em">Email:</label>
          <input type="text" className="Update_Em" name='email' defaultValue={currentUpdateStudent.email} onChange={handleOnchange}/>
        </div>
      </div>
    </section>
  )
}

export default UpdateStudent