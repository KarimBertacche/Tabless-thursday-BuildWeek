import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import MainPage from '../containers/MainPage';
import PrivateRoute from '../components/PrivateRoute';
import { login } from '../store/actions/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      search: false
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

  showSearchHandler = () => {
    if(this.state.search === false) {
      this.setState({
        search: true
      })
    } else {
      this.setState({
        search: false
      })
    }
  }

  render() {
    return (
      <div>
        <NavBar {...this.props} showSearchHandler={this.showSearchHandler}/>
  
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
          <PrivateRoute 
            path="/home" 
            render={() => {
              return  <MainPage 
                        search={this.state.search} 
                        showSearchHandler={this.showSearchHandler} 
                      />
            }}
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
      user: state.user,
  }
}

export default connect(mapStateToProps, { login })(App);
