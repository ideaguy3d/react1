/**
 * Created by Julius Alvarado on 6/28/2017.
 */

import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses, authors, ajaxCallsInProgress
});

export default rootReducer;