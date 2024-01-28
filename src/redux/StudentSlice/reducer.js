import studentType from "./constant";


const initialState = {
    students: [],
    currentUpdateStudent: {},
    currentStudent: {},
    courseEnrolled: [],
    courses: [],
    currentCourseDetail: {},
    courseStudents: [],
}


const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case studentType.SET_CURRENT_UPDATE_STUDENT:
            return {
                ...state,
                currentUpdateStudent: action.payload,
            };
        case studentType.SET_CURRENT_STUDENT:
            return {
                ...state,
                currentStudent: action.payload,
            };
        case studentType.FETCH_STUDENT:
            return {
                ...state,
                students: action.payload,
            };
        case studentType.FETCH_STUDENT_BY_ID:
            return {
                ...state,
                students: action.payload,
            };
        case studentType.FETCH_STUDENT_BY_NAME:
            return {
                ...state,
                students: action.payload,
            };
        case studentType.ADD_STUDENT:
            console.log("action.payload:", action.payload);
            return {
                ...state,
                students: [...state.students, action.payload],
            };
        case studentType.UPDATE_STUDENT:
            return {
                ...state,
                students: state.students.map((student) => student.student_id == action.payload.student_id ? action.payload : student),
            };
        case studentType.DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter((student) => student.student_id != action.payload.student_id),
            };
        case studentType.FETCH_COURSES_ENROLLED:
            return {
                ...state,
                courseEnrolled: action.payload,
            };
        case studentType.FETCH_ALL_COURSES:
            // console.log("action.payload:", action.payload);
            return {
                ...state,
                courses: action.payload,
            };

        case studentType.SET_CURRENT_COURSE_DETAIL:
            return {
                ...state,
                currentCourseDetail: action.payload,
            };
        case studentType.FETCH_STUDENT_FROM_COURSE:
            return {
                ...state,
                courseStudents: action.payload,
            };
        default:
            return state;
    }
}




export default studentReducer;