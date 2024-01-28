import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";
import StudentDetail from "./components/StudentDetail";
import CourseDetail from "./components/CourseDetail";
import CourseList from "./components/CourseList";
import  store  from "./redux/store";

function App() {
  const [isUpdateVisible, setIsUpdateVisible] = useState(false)
  const [isAddVisible, setIsAddVisible] = useState(false)
  const [isCourseDetailVisible, setIsCourseDetailVisible] = useState(false)
  const [isStudentDetailVisible, setIsStudentDetailVisible] = useState(false)
  const [isStudentListVisible, setIsStudentListVisible] = useState(true)
  const [isDashboardVisible, setIsDashboardVisible] = useState(true)
  const [isCouurseListVisible, setIsCourseListVisible] = useState(false)

  console.log("store:", store.getState()) 

  const toggleForm = (formType) => {
    switch(formType){
      case "Open add":
        setIsAddVisible(true)
        break;
      case "Close add":
        setIsAddVisible(false)
        break
      case "Open update":
        setIsUpdateVisible(true)
        break;
      case "Close update":
        setIsUpdateVisible(false)
        break;
      case "Open course detail":
        setIsCourseDetailVisible(true)
        setIsStudentDetailVisible(false)
        setIsStudentListVisible(false)
        setIsDashboardVisible(false)
        setIsCourseListVisible(false)
        break;
      case "Close course detail":
        setIsCourseDetailVisible(false)
        setIsStudentListVisible(true)
        break;
      case "Open student detail":
        setIsStudentDetailVisible(true)
        setIsAddVisible(false)
        setIsUpdateVisible(false)
        setIsCourseDetailVisible(false)
        setIsStudentListVisible(false)
        setIsDashboardVisible(false)
        break;
      case "Close student detail":
        setIsStudentDetailVisible(false)
        setIsDashboardVisible(true)
        setIsStudentListVisible(true)
        break;
      case "Open student list":
        setIsStudentListVisible(true)
        setIsCourseDetailVisible(false)
        setIsStudentDetailVisible(false)
        setIsDashboardVisible(true)
        break;
      case "Open course list":
        setIsCourseListVisible(true)
        setIsStudentListVisible(false)
        setIsUpdateVisible(false)
        setIsAddVisible(false)
        break;
      case "Close course list":
        setIsCourseListVisible(false)
        setIsStudentListVisible(true)
        break;
    }
  }
  


  return (
    <>
      <header>
        <h1 onClick={()=>toggleForm("Open student list")}>Student Management System</h1>
      </header>

      <div className="container">
        {isDashboardVisible && <Dashboard toggleForm={toggleForm}/>}
        {isAddVisible && <AddStudent toggleForm={toggleForm}/>}
        {isUpdateVisible && <UpdateStudent toggleForm={toggleForm}/>}
        {isCouurseListVisible && <CourseList toggleForm={toggleForm}/> }
        {isStudentListVisible && <StudentList toggleForm={toggleForm}/>}
        {isStudentDetailVisible && <StudentDetail toggleForm={toggleForm}/>}
        {isCourseDetailVisible && <CourseDetail toggleForm={toggleForm}/>}
      </div>
    </>
  );
}

export default App;
