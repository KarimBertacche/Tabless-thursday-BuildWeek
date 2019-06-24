import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StylesLogin = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: 25%;
    height: 300px;
    margin: 10% auto 0;
    border: 3px solid #000;
    border-radius: 10px;
    overflow: hidden;
    padding: 30px;

    h2 {
        font-size: 3rem;
        margin: 0;
        margin-bottom: 20px;
        text-align: center;
    }

    input {
        height: 35px;
        border: 3px solid red;
        border-radius: 5px;
        margin-bottom: 20px;
        font-size: 1.5rem;
        text-align: center;
        outline: none;
    }

    button {
        width: 40%;
        margin: 0 auto;
        padding: 5px;
        border: 3px solid red;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.2rem;
    }

`;

const Login = props => {
    return (
        <StylesLogin onSubmit={props.loginUserHandler}>
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
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login);