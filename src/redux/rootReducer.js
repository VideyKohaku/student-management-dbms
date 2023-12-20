import studentReducer from './studentSlice/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    students: studentReducer,
})

export default rootReducer;