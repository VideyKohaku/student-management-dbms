// import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './StudentList.css'
import { 
  setCurrentUpdateStudent,
  fetchStudents,
 } from '../redux/studentSlice/actions'
import { useEffect } from 'react'

function StudentList({toggleForm}) {
  const students = useSelector(state => state.students.students)
  const dispatch = useDispatch()






  useEffect(() => {
    dispatch(fetchStudents())
  }, [dispatch])

  const handleUpdateBtn = (studentID) => {
    console.log(studentID)
    toggleForm("Open update")
    dispatch(setCurrentUpdateStudent(studentID))
  }

  const handleDeleteBtn = (studentID) => {
    console.log(studentID)
    // dispatch({type: "DELETE_STUDENT", payload: studentID})
  }

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

          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>{student.student_id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>
                <td className='action-box'>
                  <button className="button" onClick={() => handleUpdateBtn(student.id)}>Update</button>
                  <button className="button" onClick={() => handleDeleteBtn(student.id)}>Delete</button>
                  <button className="button" onClick={() => toggleForm("Open student detail")}>Detail</button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </section>
  )
}

export default StudentList