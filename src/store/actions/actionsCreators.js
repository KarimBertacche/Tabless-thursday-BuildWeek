import * as types from './actions';
import axios from 'axios';
import { axiosWithAuth } from '../../axiosAuth';

//ACTIONS CREATOR
const loginAPI = "https://tabless-thursday-backend.herokuapp.com/api/login";

export const login = ({ username, password, email }) => dispatch => {
    const credentials = { username, password, email };

    dispatch({ type: types.LOGIN_START });

    return axios
                .post(loginAPI, credentials)
                .then(response => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('userID', response.data.user.id);
                    localStorage.setItem('userLogged', true);
                    dispatch({ type: types.LOGIN_SUCCESS, payload: response.data.user }); 
                })
                .catch(error => {
                    debugger
                })
                .finally(() => {
                    dispatch({ type: types.LOGIN_END });
                })
}

export const logOutUser = () => dispatch => {
    localStorage.clear();
    dispatch({ type: types.LOGOUT_USER });
}

const registerAPI = "https://tabless-thursday-backend.herokuapp.com/api/register/";


export const registerUser = ({ username, password, email }) => dispatch => {
    // const credentials = { username, password, email }

    return  axios
                .post(registerAPI, { username, password, email })
                .then(response => {
                    localStorage.setItem('user', JSON.stringify(response.data.saved));
                    dispatch({ type: types.REGISTER_SUCCESS, payload: response.data.saved })
                })
                .catch(error => {
                    debugger
                })
}

export const getUserTabs = () => dispatch => {
    let id = localStorage.getItem('userID');

    dispatch({ type: types.FETCH_START });

    axiosWithAuth()
        .get(`https://tabless-thursday-backend.herokuapp.com/api/users/${id}`)
        .then(response => {
            dispatch({ type: types.FETCH_SUCCESS, payload: response.data.tabs })
        })
        .catch(error => {
            debugger
        })
        .finally(() => {
            dispatch({ type: types.FETCH_END })
        })
}

const postTabAPI = "https://tabless-thursday-backend.herokuapp.com/api/tabs";

export const postUserTab = (tabInfo) => dispatch => {
    axiosWithAuth()
        .post(postTabAPI, tabInfo) 
        .then(response => {
            dispatch({ type: types.CREATE_TAB, payload: response.data[0] })
            // getUserTabs();
        })
        .catch(error => {
            debugger
        })
}

export const deleteTab = (id) => dispatch => {
    axiosWithAuth()
        .delete(`https://tabless-thursday-backend.herokuapp.com/api/tabs/${id}`)
        .then(response => {
            dispatch({ type: types.DELETE_TAB, payload: response.data.message, tabId: id });
        })
        .catch(error => {
            debugger
        })
}

export const updateTab = (id, tabInfo) => dispatch => {

    axiosWithAuth()
        .put(`https://tabless-thursday-backend.herokuapp.com/api/tabs/${id}`, tabInfo)
        .then(response => {
            dispatch({ type: types.UPDATE_SUCCESS, payload: JSON.parse(response.config.data), tabId: id });
        })
        .catch(error => {
            debugger
        })
}

export const addCategory = (category) => dispatch => {
    dispatch({ type: types.ADD_CATEGORY, payload: category });
}
 
export const addCategoryLink = (nameLink) => dispatch => {
    dispatch({ type: types.ADD_CATEGORY, payload: nameLink });
}

export const removeCategory = (category) => dispatch => {
    dispatch({ type: types.REMOVE_CATEGORY, payload: category });
}

export const searchTab = (searchResult) => dispatch => {
    dispatch({ type: types.SEARCH_TAB, payload: searchResult });
}

export const undoSearch = () => dispatch => {
    dispatch({ type: types.UNDO_SEARCH });
}

export const tabVisited = (tabId) => dispatch => {
    dispatch({ type: types.TAB_VISITED, payload: tabId});
}