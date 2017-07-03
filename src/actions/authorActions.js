/**
 * Created by Julius Alvarado on 7/2/2017.
 */

import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export function loadAuthorSuccess(authors) {
    return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors() {
    return function (dispatch) {
        return AuthorApi.getAllAuthors().then(function (authors) {
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    }
}