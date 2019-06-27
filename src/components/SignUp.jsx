import React, { Component } from 'react';
import { connect } from 'react-redux';

import { StylesSignUp } from '../styles/stylesAuth';
import { registerUser } from '../store/actions/actions';

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
    
        if(this.state.username.length > 3 && this.state.password.length > 5) {
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
        } else {
            alert('make your username and password are at least 3 characters!');
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
                    minLength="3"
                />
                <input 
                    type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.registerInputHandler}
                    placeholder="password"
                    minLength="3"
                />
                <input 
                    type="password"
                    value={this.state.password2}
                    name="password2"
                    onChange={this.registerInputHandler}
                    placeholder="repeat password"
                    minLength="3"
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