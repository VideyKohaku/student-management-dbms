import studentType from "./constant";
import StudentAPI from "../../api/callStudentAPI";





export const setCurrentUpdateStudent = (id) => {
    return {
        type: studentType.SET_CURRENT_UPDATE_STUDENT,
        payload: id,
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