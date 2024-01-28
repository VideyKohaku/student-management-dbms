import axios from "axios";

export default class EnrollmentAPI {
    static getAllEnrollment = async () => {
        const response = await axios.get("http://localhost:3000/api/v1/enrollments");
        return response.data;
    }

    static getEnrollmentById = async (id) => {
        console.log("id:", typeof id);
        const get_url = id !== "" ? `http://localhost:3000/api/v1/enrollments/enrollment?filterType=id&id=${id}` : "http://localhost:3000/api/v1/enrollments";
        const response = await axios.get(get_url);
        return response.data;
    }

    static getEnrollmentByStudentId = async (studentId) => {
        console.log("studentId:", studentId);
        const get_url = studentId !== "" ? `http://localhost:3000/api/v1/enrollments/enrollment?filterType=studentId&student_id=${studentId}` : "http://localhost:3000/api/v1/enrollments";
        const response = await axios.get(get_url);
        return response.data;
    }

    static getEnrollmentByCourseId = async (courseId) => {
        console.log("courseId:", courseId);
        const get_url = courseId !== "" ? `http://localhost:3000/api/v1/enrollments/enrollment?filterType=courseId&course_id=${courseId}` : "http://localhost:3000/api/v1/enrollments";
        const response = await axios.get(get_url);
        return response.data;
    }

    static updateEnrollment = async (enrollment) => {
        const response = await axios.put(`http://localhost:3000/api/v1/enrollments/enrollment`, enrollment);
        return response.data;
    }

    static addEnrollment = async (enrollment) => { 
        const response = await axios.post("http://localhost:3000/api/v1/enrollments", enrollment);
        return response.data;
    }

    static deleteEnrollment = async (id) => {
        const response = await axios.delete(`http://localhost:3000/api/v1/enrollments/enrollment?enrollment_id=${id}`);
        return response.data;
    }

}