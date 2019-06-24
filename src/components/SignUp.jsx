import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { registerUser } from '../store/actions/actions';

const StylesSignUp = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: 25%;
    height: 350px;
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


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password2: '',
            email: ''
        }
    }

    registerInputHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    registerUserHandler = (event) => {
        event.preventDefault();
    
        if(this.state.password === this.state.password2) {
            this.props.registerUser({
                username: this.state.username,
                password: this.state.password,
                email: this.state.email
            }).then(() => {
                this.props.passRegisteredUserHandler();
                this.props.history.push('/login')
            });
    
            this.setState({
                username: '',
                password: '',
                password2: '',
                email: ''
            })
        } else {
            alert('passwords don\'t match');
            this.setState({
                password: '',
                password2: ''
            })
        } 
    }

    render() {
        return (
            <StylesSignUp onSubmit={this.registerUserHandler}>
                <h2>Register</h2>
                <input 
                    type="text"
                    value={this.state.username}
                    name='username'
                    onChange={this.registerInputHandler}
                    placeholder='username'
                />
                <input 
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.registerInputHandler}
                    placeholder="password"
                />
                <input 
                    type="password"
                    value={this.state.password2}
                    name="password2"
                    onChange={this.registerInputHandler}
                    placeholder="repeat password"
                />
                <input 
                    type="email"
                    value={this.state.email}
                    name="email"
                    onChange={this.registerInputHandler}
                    placeholder="email"/>
                <button type="submit">Register</button>
            </StylesSignUp>
        );
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         onRegisteringUser: (credentials) => dispatch({ type: registerUser, payload: credentials })
//     }
// }

export default connect(null, { registerUser })(SignUp);