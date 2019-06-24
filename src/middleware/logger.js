export const logger = store => next => action => {
    console.group(action.type);
    console.log('Previous state: ', store.getState());
    console.log('Action: ', action)
    next(action);
    console.log('Updated state: ', store.getState());
    console.groupEnd();
}