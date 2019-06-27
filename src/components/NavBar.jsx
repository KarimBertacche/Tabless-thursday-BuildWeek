import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import { StylesNavBar } from '../styles/stylesNavBar';
import * as actions from '../store/actions/actions';

const NavBar = props => {
    const logUserOutHandler = (event) => {
        event.preventDefault();
        props.onLoggingOut();
        props.history.push('/');
    }

    if (!!localStorage.getItem('userLogged') || props.loggedIn) {
        return (
            <StylesNavBar>
                <Link to="/home" className="heading-secondary"><h2>T@bless Thursday</h2></Link>
                <nav>
                    <NavLink to="/home" activeClassName="active" className="nav-links">Tabs</NavLink>
                    <NavLink to="/about" activeClassName="active" className="nav-links">About</NavLink>
                    <Link to="/" className="nav-links" onClick={logUserOutHandler}>Log Out</Link>
                </nav>
            </StylesNavBar>
        )
    } else {
        return (
            <StylesNavBar>
                <Link to="/" className="heading-secondary"><h2>T@bless Thursday</h2></Link>
                <nav>
                    <NavLink to="/login" activeClassName="active" className="nav-links">Sign in</NavLink>
                    <NavLink to="/register" activeClassName="active" className="nav-links">Sign Up</NavLink>
                </nav>
            </StylesNavBar>
        )
    }
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoggingOut: () => dispatch(actions.logOutUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);