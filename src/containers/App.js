import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import MainPage from '../containers/MainPage';
import PrivateRoute from '../components/PrivateRoute';
import { login, getUserTabs } from '../store/actions/actionsCreators';
import bgImage from '../img/blown-away.jpg';

const StylesApp = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, rgba(0, 0, 0, .5), rgba(0, 255, 0, .7)), url(${bgImage});
  background-position: center;
  background-size: cover;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      search: false,
      toggleMenu: false
    }
  }

  componentDidMount() {
    this.getUserTabsHandler();
  }

  getUserTabsHandler = () => {
    this.props.getUserTabs();
    this.setState({ toggleMenu: false });
    localStorage.setItem('userLogged', this.props.loggedIn);
  }

  inputChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  loginUserHandler = (event) => {
    event.preventDefault();

    if(this.state.username.length >= 3 && this.state.password.length >= 3) {
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
    this.props.history.push("/login");
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

  toggleMenuHandler = () => {
    if(this.state.toggleMenu === false) {
      this.setState({
        toggleMenu: true
      })
    } else {
      this.setState({
        toggleMenu: false
      })
    }
  }

  render() {
    return (
      <StylesApp>
        <NavBar 
          {...this.props}
          showSearchHandler={this.showSearchHandler} 
          toggleMenu={this.state.toggleMenu}
          toggleMenuHandler={this.toggleMenuHandler}/>
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
                          toggleMenu={this.state.toggleMenu}
                          toggleMenuHandler={this.toggleMenuHandler}
                        />
              }}
            />
          </Switch>     
      </StylesApp>
    );
  }
}

const mapStateToProps = state => {
  return {
      user: state.login.user,
      loggedIn: state.login.loggedIn,
  }
}

export default connect(mapStateToProps, { login, getUserTabs })(App);
