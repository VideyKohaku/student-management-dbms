import axios from "axios";

export default class StudentAPI {
    static getAllStudent = async () => {
        const response = await axios.get("http://localhost:3000/api/v1/students");
        return response.data;
    }

    static getStudentById = async (id) => {
        const get_url = id !== "" ? `http://localhost:3000/api/v1/students/student?filterType=id&id=${id}` : "http://localhost:3000/api/v1/students";
        const response = await axios.get(get_url);
        return response.data;
    }

    static getStudentByFullName = async (firstName, lastName) => {
        let get_url = "";
        
        if (firstName !== "" && lastName !== "") {
            get_url = `http://localhost:3000/api/v1/students/student?filterType=fullName&first_name=${firstName}&last_name=${lastName}`;
        }else if (firstName == "") {
            get_url = `http://localhost:3000/api/v1/students/student?filterType=lastName&lastName=${lastName}`;
        }else {
            get_url = `http://localhost:3000/api/v1/students`;
        }


        console.log("get_url:", get_url);
        const response = await axios.get(get_url);
        return response.data;
    }

    static addStudent = async (student) => {
        console.log("student:", student);
        const response = await axios.post("http://localhost:3000/api/v1/students", student);
        return response.data;
    }

    static updateStudent = async (student) => {
        const response = await axios.put(`http://localhost:3000/api/v1/students/student`, student);
        return response.data;
    }

    static deleteStudent = async (id) => {
        const response = await axios.delete(`http://localhost:3000/api/v1/students/student?student_id=${id}`);
        return response.data;
    }

    static getStudentFromCourse = async (course_id, min_grade = 0, max_grade = 10) => {
        const response = await axios.get(`http://localhost:3000/api/v1/students/student?filterType=courseGrade&course_id=${course_id}&min_grade=${min_grade}&max_grade=${max_grade}`);
        return response.data;
    }

}