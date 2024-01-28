import axios from "axios";

export default class CourseAPI {
    static getAllCourse = async () => {
        const response = await axios.get("http://localhost:3000/api/v1/courses");
        return response.data;
    }

    static getCourseById = async (id) => {
        console.log("id:", typeof id);
        const get_url = id !== "" ? `http://localhost:3000/api/v1/courses/course?filterType=id&id=${id}` : "http://localhost:3000/api/v1/courses";
        const response = await axios.get(get_url);
        return response.data;
    }

    static getCourseByName = async (name) => {
        console.log("name:", name);
        const get_url = name !== "" ? `http://localhost:3000/api/v1/courses/course?filterType=name&name=${name}` : "http://localhost:3000/api/v1/courses";
        const response = await axios.get(get_url);
        return response.data;
    }

    static getCourseEnrolledByStudent = async (student_id) => {
        console.log("id:", student_id);
        const get_url = `http://localhost:3000/api/v1/courses/course?filterType=enrolledByStudent&student_id=${student_id}`;
        const response = await axios.get(get_url);
        return response.data;
    }

    static getCoursesWithEnrollmentCount = async (course_id) => {
        console.log("id:", course_id);
        const get_url = `http://localhost:3000/api/v1/courses/course?student_id=1&filterType=enrollmentCount`;
        const response = await axios.get(get_url);
        return response.data;
    }
}