import * as types from '../actions/actions';

const initialState = {
    user: null,
    tabs: [],
    loggedIn: false,
    loading: false,
    deleteMessage: '',
    categories: ['category0', 'category1', 'category2', 'category3']
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
            return {...state, tabs: state.tabs.concat(action.payload)};
        case types.DELETE_TAB:
            return {...state, deleteMessage: action.payload };
        case types.UPDATE_SUCCESS:
            return {...state};
        case types.ADD_CATEGORY:
            return {...state, categories: state.categories.concat(action.payload)};
        case types.REMOVE_CATEGORY:
            const newCategoriesArr = state.categories.filter(category => category !== action.payload);
            return {...state, categories: newCategoriesArr};
        default: 
            return state;
    }
}