import axios from 'axios';
import { axiosWithAuth } from '../../axiosAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_END = 'LOGIN_END';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_END = 'FETCH_END';

export const LOGOUT_USER = 'LOGOUT_USER';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const CREATE_TAB = 'CREATE_TAB';

export const DELETE_TAB = 'DELETE_TAB';

export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';

export const SEARCH_TAB = 'SEARCH_TAB';
export const UNDO_SEARCH = 'UNDO_SEARCH';

export const TAB_VISITED = 'TAB_VISITED';

//ACTIONS CREATOR

const loginAPI = "https://tabless-thursday-backend.herokuapp.com/api/login";

export const login = ({ username, password, email }) => dispatch => {
    const credentials = { username, password, email };

    dispatch({ type: LOGIN_START });

    return axios
                .post(loginAPI, credentials)
                .then(response => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('userID', response.data.user.id);
                    localStorage.setItem('userLogged', true);
                    dispatch({ type: LOGIN_SUCCESS, payload: response.data.user }); 
                })
                .catch(error => {
                    debugger
                })
                .finally(() => {
                    dispatch({ type: LOGIN_END });
                })
}

export const logOutUser = () => dispatch => {
    localStorage.clear();
    dispatch({ type: LOGOUT_USER });
}

const registerAPI = "https://tabless-thursday-backend.herokuapp.com/api/register/";


export const registerUser = ({ username, password, email }) => dispatch => {
    // const credentials = { username, password, email }

    return  axios
                .post(registerAPI, { username, password, email })
                .then(response => {
                    localStorage.setItem('user', JSON.stringify(response.data.saved));
                    dispatch({ type: REGISTER_SUCCESS, payload: response.data.saved })
                })
                .catch(error => {
                    debugger
                })
}

export const getUserTabs = () => dispatch => {
    let id = localStorage.getItem('userID');

    axiosWithAuth()
        .get(`https://tabless-thursday-backend.herokuapp.com/api/users/${id}`)
        .then(response => {
            dispatch({ type: FETCH_SUCCESS, payload: response.data.tabs })
        })
        .catch(error => {
            debugger
        });
}

const postTabAPI = "https://tabless-thursday-backend.herokuapp.com/api/tabs";

export const postUserTab = (tabInfo) => dispatch => {
    axiosWithAuth()
        .post(postTabAPI, tabInfo) 
        .then(response => {
            dispatch({ type: CREATE_TAB, payload: response.data[0] })
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
            dispatch({ type: DELETE_TAB, payload: response.data.message });
        })
        .catch(error => {
            debugger
        })
}

export const updateTab = (id, tabInfo) => dispatch => {

    axiosWithAuth()
        .put(`https://tabless-thursday-backend.herokuapp.com/api/tabs/${id}`, tabInfo)
        .then(response => {
            dispatch({ type: UPDATE_SUCCESS });
        })
        .catch(error => {
            debugger
        })
}

export const addCategory = (category) => dispatch => {
    dispatch({ type: ADD_CATEGORY, payload: category });
}
 
export const removeCategory = (category) => dispatch => {
    dispatch({ type: REMOVE_CATEGORY, payload: category });
}

export const searchTab = (searchResult) => dispatch => {
    dispatch({ type: SEARCH_TAB, payload: searchResult });
}

export const undoSearch = () => dispatch => {
    dispatch({ type: UNDO_SEARCH });
}

export const tabVisited = (tabId) => dispatch => {
    dispatch({ type: TAB_VISITED, payload: tabId})
}