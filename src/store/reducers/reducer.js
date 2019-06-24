import * as types from '../actions/actions';

const initialState = {
    user: null,
    tabs: null,
    loggedIn: false,
    loading: false,
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_SUCCESS:
            return {...state, user: action.payload, loggedIn: true };
        case types.LOGOUT_USER: 
            return {...state, loggedIn: false };
        case types.REGISTER_SUCCESS:
            return {...state, user: action.payload }
        case types.FETCH_SUCCESS:
            return {...state, tabs: action.payload };
        default: 
            return state;
    }
}