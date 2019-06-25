import * as types from '../actions/actions';

const initialState = {
    user: null,
    tabs: null,
    loggedIn: false,
    loading: false,
    deleteMessage: '',
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_SUCCESS:
            return {...state, user: action.payload, loggedIn: true};
        case types.LOGOUT_USER: 
            return {...state, loggedIn: false};
        case types.REGISTER_SUCCESS:
            return {...state, user: action.payload};
        case types.FETCH_SUCCESS:
            return {...state, tabs: action.payload};
        case types.CREATE_TAB:
            return {...state, tabs: [action.payload].concat(state.tabs)};
        case types.DELETE_TAB:
            return {...state, deleteMessage: action.payload };
        default: 
            return state;
    }
}