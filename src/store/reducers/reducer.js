import * as types from '../actions/actions';

const initialState = {
    user: null,
    tabs: [],
    loggedIn: false,
    loginLoading: false,
    fetchLoading: false,
    deleteMessage: '',
    categories: ['category0', 'category1', 'category2', 'category3'],
    visitedTabs: null,
    savedTabs: null
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case types.LOGIN_START:
            return {...state, loginLoading: true};
        case types.LOGIN_SUCCESS:
            return {...state, user: action.payload, loggedIn: true};
        case types.LOGIN_END:
            return {...state, loginLoading: false};
        case types.LOGOUT_USER: 
            return {...state, loggedIn: false};
        case types.REGISTER_SUCCESS:
            return {...state, user: action.payload};
        case types.FETCH_START:
            return {...state, fetchLoading: true};
        case types.FETCH_SUCCESS:
            // if(state.visitedTabs === null || state.visitedTabs.length < action.payload.length) {
            if(state.visitedTabs === null) {
                return {...state, tabs: action.payload, visitedTabs: action.payload};
            } 
            return {...state, tabs: action.payload};
        case types.FETCH_END:
            return {...state, fetchLoading: false};
        case types.CREATE_TAB:
            return {...state, tabs: state.tabs.concat(action.payload), visitedTabs: state.visitedTabs.concat(action.payload)};
        case types.DELETE_TAB:
            const removedTabArr = state.visitedTabs.filter(tab => {
                debugger
                return tab.tab_id !== Number(action.tabId)
            });
            return {...state, deleteMessage: action.payload, visitedTabs: removedTabArr };
        case types.UPDATE_SUCCESS:
            const updatedTabArr = state.visitedTabs.map(tab => {
                let newTabObj = action.payload;
                if (tab.tab_id === Number(action.tabId) && tab.visited === true) {  
                    return {...tab, 
                            title: newTabObj.title,
                            category: newTabObj.category,
                            description: newTabObj.description,
                            website: newTabObj.website,
                            visited: true }
                } else if (tab.tab_id === Number(action.tabId) && tab.visited === false) {
                    return {...tab, 
                            title: newTabObj.title,
                            category: newTabObj.category,
                            description: newTabObj.description,
                            website: newTabObj.website,
                            visited: false }
                }
                return {...tab}
            })
            console.log(updatedTabArr);
            return {...state, visitedTabs: updatedTabArr};
        case types.ADD_CATEGORY:
            return {...state, categories: state.categories.concat(action.payload)};
        case types.REMOVE_CATEGORY:
            const newCategoriesArr = state.categories.filter(category => category !== action.payload);
            return {...state, categories: newCategoriesArr};
        case types.SEARCH_TAB:
            const filteredTabArr = state.visitedTabs.filter(tab => tab.title.toLowerCase().startsWith(action.payload.toLowerCase()));
            return {...state, visitedTabs: filteredTabArr, savedTabs: state.visitedTabs};
        case types.UNDO_SEARCH:
            return {...state, visitedTabs: state.savedTabs }
        case types.TAB_VISITED:
            const newVisitedTabs = state.visitedTabs.map(tab => {
                if(tab.tab_id === action.payload) {
                    return {...tab, visited: true};
                } else if (tab.visited === undefined){
                    return {...tab, visited: false};
                }
                return {...tab};
            });

            let newlyVisitedTabs = null;

            if(state.savedTabs !== null) {
                newlyVisitedTabs = state.savedTabs.map(tab => {
                    if(tab.tab_id === action.payload) {
                        return {...tab, visited: true};
                    } else if (tab.visited === undefined){
                        return {...tab, visited: false};
                    }
                    return {...tab};
                });
            }
            return {...state, visitedTabs: newVisitedTabs, savedTabs: newlyVisitedTabs}
        default: 
            return state;
    }
}