import React from 'react';
import { connect } from 'react-redux';

import { StylesLogin } from '../styles/stylesAuth';
import loginSpinner from '../spinners/wave-preloader.svg';

const Login = props => {
    return (
        <>
            {
                props.loginLoading 
                ?   <StylesLogin>
                        <h2>Loggin In...</h2>   
                        <figure><img src={loginSpinner} alt="loginSpinner"/></figure>
                    </StylesLogin>
                :   <StylesLogin onSubmit={props.loginUserHandler}>
                        <h2>Login</h2>
                        <input 
                            type="text"
                            value={props.username}
                            name='username'
                            onChange={props.inputChangeHandler}
                            placeholder='username'
                        />
                        <input 
                            type="password"
                            value={props.password}
                            name="password"
                            onChange={props.inputChangeHandler}
                            placeholder="password"
                        />
                        <input 
                            type="email"
                            value={props.email}
                            name="email"
                            onChange={props.inputChangeHandler}
                            placeholder="email"/>
                        <button type="submit">Sign in</button>
                    </StylesLogin>
            }
        </>
    );
}

const mapStateToProps = state => {
    return {
        user: state.user,
        loginLoading: state.loginLoading
    }
}

export default connect(mapStateToProps)(Login);