import {combineReducers} from 'redux';

import location from './location';
import discussion from './discussion';
import authReducer from './auth';

export default combineReducers({location,discussion,authReducer});