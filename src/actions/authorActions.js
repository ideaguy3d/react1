/**
 * Created by Julius Alvarado on 7/2/2017.
 */

import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadAuthorSuccess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(function (authors) {
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    }
}