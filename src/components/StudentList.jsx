// import React from 'react'

function StudentList() {
  return (
    <section className="student-list card">
      <div className="card-header">
        <h2>Student List</h2>
        <div className="action-buttons">
          <button className="button" onClick="filterStudents()">Filter</button>
         
        </div>
      </div>
      <div className="card-body">
        <table id="studentsTable">
          {/* <!-- Student list table goes here --> */}
        </table>
      </div>
    </section>
  )
}

export default StudentList