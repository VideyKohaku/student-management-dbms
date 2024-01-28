import studentType from "./constant";
import StudentAPI from "../../api/callStudentAPI";
import CourseAPI from "../../api/callCourseAPI";




export const setCurrentUpdateStudent = (student) => {
    return {
        type: studentType.SET_CURRENT_UPDATE_STUDENT,
        payload: student,
    };
}

export const setCurrentStudentAction = (student) => {
    return {
        type: studentType.SET_CURRENT_STUDENT,
        payload: student,
    };
}


export const fetchStudents = () => {
    return async (dispatch) => {
        const response = await StudentAPI.getAllStudent();
        console.log("fetch student:", response);
        dispatch({
            type: studentType.FETCH_STUDENT,
            payload: response,
        });
    }

}


export const fetchStudentById = (id) => {
    return async (dispatch) => {
        const response = await StudentAPI.getStudentById(id);
        console.log("fetch student by id:", response);
        dispatch({
            type: studentType.FETCH_STUDENT_BY_ID,
            payload: response,
        });
    }

}


export const fetchStudentByName = (firstName, lastName) => {
    return async (dispatch) => {
        const response = await StudentAPI.getStudentByFullName(firstName, lastName);
        console.log("fetch student by full name:", response);
        dispatch({
            type: studentType.FETCH_STUDENT_BY_NAME,
            payload: response,
        });
    }
}



export const addStudent = (student) => {
    return async (dispatch) => {
        const response = await StudentAPI.addStudent(student);
        console.log("add student:", response);
        dispatch({
            type: studentType.ADD_STUDENT,
            payload: response,
        });
    }
}


export const updateStudentAction = (student) => {
    return async (dispatch) => {
        const response = await StudentAPI.updateStudent(student);
        console.log("update student:", response);
        dispatch({
            type: studentType.UPDATE_STUDENT,
            payload: response,
        });
    }
}


export const deleteStudent = (id) => {
    return async (dispatch) => {
        const response = await StudentAPI.deleteStudent(id);
        console.log("delete student:", response);
        console.log("path", studentType.DELETE_STUDENT);
        dispatch({
            type: studentType.DELETE_STUDENT,
            payload: response,
        });
    }
}

export const fetchCoursesEnrolled = (student_id) => {
    return async (dispatch) => {
        const response = await CourseAPI.getCourseEnrolledByStudent(student_id);
        console.log("fetch courses enrolled:", response);
        dispatch({
            type: studentType.FETCH_COURSES_ENROLLED,
            payload: response,
        });
    }
}


export const fetchAllCourses = () => {
    return async (dispatch) => {
        const response = await CourseAPI.getCoursesWithEnrollmentCount();
        console.log("fetch all courses:", response);
        dispatch({
            type: studentType.FETCH_ALL_COURSES,
            payload: response,
        });
    }
}

export const setCurrentCourseDetail = (course_id) => {
    return async (dispatch) => {
        const response = await CourseAPI.getCourseById(course_id);
        console.log("fetch course detail:", response[0]);
        dispatch({
            type: studentType.SET_CURRENT_COURSE_DETAIL,
            payload: response[0],
        });
    }
}


export const fetchStudentFromCourse = (course_id) => {
    return async (dispatch) => {
        const response = await StudentAPI.getStudentFromCourse(course_id);
        console.log("fetch student from course:", response);
        dispatch({
            type: studentType.FETCH_STUDENT_FROM_COURSE,
            payload: response,
        });
    }
}


export const fetchStudentFromCourseWithGrade = (course_id, min_grade, max_grade) => {
    return async (dispatch) => {
        const response = await StudentAPI.getStudentFromCourse(course_id, min_grade, max_grade);
        console.log("fetch student from course with grade:", response);
        dispatch({
            type: studentType.FETCH_STUDENT_FROM_COURSE,
            payload: response,
        });
    }
}


export const fetchCoursesWithEnrollmentCount = () => {
    return async (dispatch) => {   
        const response = await CourseAPI.getCoursesWithEnrollmentCount();
        console.log("fetch courses with enrollment count:", response);
        dispatch({
            type: studentType.FETCH_ALL_COURSES,
            payload: response,
        });
    }
}