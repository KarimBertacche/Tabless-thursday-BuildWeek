import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ render: Component, ...rest }) => {
    const userId = localStorage.getItem('userID') 
    if(userId === 6) {
        return  <Redirect to="/login" />
    } else {
        return  <Route {...rest} render={ () => {
                    if(localStorage.getItem('token')) {
                        return <Component />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
    }
}

export default PrivateRoute;