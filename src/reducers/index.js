/**
 * Created by Julius Alvarado on 6/28/2017.
 */

import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses
});

export default rootReducer;