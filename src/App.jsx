import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  const [isUpdateVisible, setIsUpdateVisible] = useState(true)
  const [isAddVisible, setIsAddVisible] = useState(true)

  

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
    }
  }



  return (
    <>
      <header>
        <h1>Student Management System</h1>
      </header>

      <div className="container">
        <Dashboard toggleForm={toggleForm}/>
        <StudentList toggleForm={toggleForm}/>
        {isAddVisible && <AddStudent toggleForm={toggleForm}/>}
        {isUpdateVisible && <UpdateStudent toggleForm={toggleForm}/>}
      </div>
    </>
  );
}

export default App;
