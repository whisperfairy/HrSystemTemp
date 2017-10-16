import { combineReducers } from 'redux';
import projectReducer from './projectReducer'

const rootReducer = combineReducers({
    projectReducer:projectReducer
});

export default rootReducer;