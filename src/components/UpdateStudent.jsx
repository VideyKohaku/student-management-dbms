// import React from 'react'

function UpdateStudent({toggleForm}) {
  return (
    <section className="updateStudentForm card" >
      <div className="card-header">
        <h2>Update Student</h2>
        <div className="action-buttons">
          <button className="cancel" onClick={()=>toggleForm("Close update")}>Cancel</button>
          <button className="add" onClick="updateStudent()">Update</button>
        </div>
      </div>
      <div className="card-body">
        {/* <!-- Update student form goes here --> */}
        {/* <!-- ... similar to the Add Student form ... --> */}
        <div className="form-group">
          <label htmlFor="Update_FN">First Name:</label>
          <input type="text" className="Update_FN"/>
          <label htmlFor="Update_LN">Last Name:</label>
          <input type="text" className="Update_LN"/> 
          <label htmlFor="Em">Email:</label>
          <input type="text" className="Update_Em"/>
        </div>
      </div>
    </section>
  )
}

export default UpdateStudent