function AddStudent({toggleForm}) {
  return (
    <section className="addStudentForm card" >
      <div className="card-header">
        <h2>Add Student</h2>
        <div className="action-buttons">
          <button className="cancel" onClick={() => toggleForm("Close add")}>Cancel</button>
          <button className="add" onClick="addStudent()">Add</button>
        </div>
      </div>
      <div className="card-body">
        {/* <!-- Add student form goes here --> */}
        <div className="form-group">
          <label htmlFor="SclassName">StudentclassName:</label>
          <input type="text" className="SclassName"/>
          <label htmlFor="FN">First Name:</label>
          <input type="text" className="FN"/>
          <label htmlFor="LN">Last Name:</label>
          <input type="text" className="LN"/>
          <label htmlFor="DOB">Date of Birth:</label>
          <input type="text" className="DOB"/>
          <label htmlFor="G">Gender:</label>
          <input type="text" className="G"/>
          <label htmlFor="Addr">Address:</label>
          <input type="text" className="Add/>"/>
          <label htmlFor="PN">Phone:</label>
          <input type="text" className="PN"/>
          <label htmlFor="Em">Email:</label>
          <input type="text" className="Em"/>
        </div>
      </div>
    </section>

  )
}

export default AddStudent