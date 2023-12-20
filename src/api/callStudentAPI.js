import axios from "axios";

export default class StudentAPI {
    static getAllStudent = async () => {
        const response = await axios.get("http://localhost:3000/api/v1/students");
        return response.data;
    }

    static getStudentById = async (id) => {
        const response = await axios.get(`http://localhost:3000/api/v1/students/student?filterType="id"&id=${id}`);
        return response.data;
    }

    static getStudentByFullName = async (firstName, lastName) => {
        const response = await axios.get(`http://localhost:3000/api/v1/students?student?filterType="fullName"&first_name=${firstName}&last_name=${lastName}`);
        return response.data;
    }

    static addStudent = async (student) => {
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
}