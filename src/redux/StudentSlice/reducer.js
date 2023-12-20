import studentType from "./constant";



const initialState = {
    students: [],
    currentUpdateStudent: 3,
}


const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case studentType.SET_CURRENT_UPDATE_STUDENT:
            return {
                ...state,
                currentUpdateStudent: action.payload,
            };
        case studentType.FETCH_STUDENT:
            return {
                ...state,
                students: action.payload,
            };
        default:
            return state;
    }
}




export default studentReducer;