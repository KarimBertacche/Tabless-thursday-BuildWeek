import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import MainPage from '../containers/MainPage';
import PrivateRoute from '../components/PrivateRoute';
// import * as types from '../store/actions/actions';
import { login } from '../store/actions/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    }
  }

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  loginUserHandler = (event) => {
    event.preventDefault();

    this.props.login({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    }).then(() => {
      this.props.history.push("/home");
    })

    this.setState({
      username: '',
      password: '',
      email: ''
    })
  }

  passRegisteredUserHandler = () => {
    if(localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      this.setState({
          username: user.username,
          email: user.email
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar />
  
        <Switch>
          <Route 
            path="/login" 
            render={() => {
              return (
                <Login 
                  username={this.state.username} 
                  password={this.state.password}
                  email={this.state.email}
                  inputChangeHandler={this.inputChangeHandler}
                  loginUserHandler={this.loginUserHandler}
                />
              );
            }}
          />
          <Route 
            path="/register" 
            render={(props) => {
              return <SignUp {...props} passRegisteredUserHandler={this.passRegisteredUserHandler} />
            }} />
          <PrivateRoute exact path="/home" component={MainPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      user: state.user
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onLogin: ({ username, password, email }) => dispatch(login({ username, password, email })),
//   }
// }

export default connect(mapStateToProps, { login })(App);
