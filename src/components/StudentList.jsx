// import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import './StudentList.css'
import { 
  setCurrentUpdateStudent,
  fetchStudents,
  fetchStudentById,
  fetchStudentByName,
  deleteStudent,
  setCurrentStudentAction,
  fetchCoursesEnrolled,
  fetchAllCourses,
 } from '../redux/studentSlice/actions'
import { useEffect } from 'react'

function StudentList({toggleForm}) {
  const students = useSelector(state => state.students.students)
  const dispatch = useDispatch()
  const [isFilterIDVisible, setIsFilterIDVisible] = useState(false)
  const [isFilterNameVisible, setIsFilterNameVisible] = useState(false)
  const [filterID, setFilterID] = useState(0)
  const [filterFN, setFilterFN] = useState("")
  const [filterLN, setFilterLN] = useState("")




  useEffect(() => {
    dispatch(fetchStudents())
    dispatch(fetchAllCourses())
  }, [dispatch])

  const handleUpdateBtn = (student) => {
    toggleForm("Open update")
    dispatch(setCurrentUpdateStudent(student))
  }

  const handleDeleteBtn = (studentID) => {
    dispatch(deleteStudent(studentID))
  }

  const handleOpenFilter = (option) => {
    switch(option){
      case "open filter id":
        setIsFilterIDVisible(true)
        setIsFilterNameVisible(false)
        break;
      case "open filter name":
        setIsFilterNameVisible(true)
        setIsFilterIDVisible(false)
        break;
    }
  }

  const handleCloseFilter = () => {
    setIsFilterIDVisible(false)
    setIsFilterNameVisible(false)
    dispatch(fetchStudents())
  }


  const handleDetailBtn = (student) => {
    dispatch(fetchCoursesEnrolled(student.student_id))
    dispatch(setCurrentStudentAction(student))
    dispatch(setCurrentUpdateStudent(student))
    toggleForm("Open student detail")
    // dispatch(setCurrentUpdateStudent(student))
  }

  return (
    <section className="student-list card">
      <div className="card-header">
        <h2>Student List</h2>
        <div className="action-buttons">
          <button className='button' onClick={() => handleCloseFilter()}>Close Filter</button>
          <button className="button" onClick={() => handleOpenFilter("open filter id")}>Filter by ID</button>
          <button className="button" onClick={() => handleOpenFilter("open filter name")}>Filter by Name</button>
        </div>
      </div>
      {isFilterIDVisible && (<>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="filterID">Filter by ID:</label>
            <input type="text" className="filterID" onChange={(e)=>setFilterID(e.target.value)}/>
            <button className="button" onClick={()=>dispatch(fetchStudentById(filterID))}>Submit Filter</button>
          </div>
        </div>
      </>)}

      {isFilterNameVisible && (<>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="filterFirstName">First Name:</label>
            <input type="text" className="filterFirstName" onChange={(e)=>setFilterFN(e.target.value)}/>
            <label htmlFor="filterLastName">Last Name:</label>
            <input type="text" required={true} className="filterLastName" onChange={(e)=>setFilterLN(e.target.value)}/>
            <button className="button" onClick={() => dispatch(fetchStudentByName(filterFN, filterLN))}>Submit Filter</button>
          </div>
        </div>
      </>)}
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
                  <button className="button" onClick={() => handleUpdateBtn(student)}>Update</button>
                  <button className="button" onClick={() => handleDeleteBtn(student.student_id)}>Delete</button>
                  <button className="button" onClick={() => handleDetailBtn(student)}>Detail</button>
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