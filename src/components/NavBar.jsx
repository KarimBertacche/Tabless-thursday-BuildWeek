import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import * as actions from '../store/actions/actions';

const StylesNavBar = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 8.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: red;
    padding: 0 30px;
    box-shadow: 0 5px 10px #000;
    z-index: 200;
  
    .heading-secondary {
        text-decoration: none;
        color: #000;
        
        h2 {
            font-size: 4rem;
            margin: 0;    
        }
    }

    .nav-links {
        text-decoration: none;
        font-size: 2rem;
        font-weight: bold;
        padding: 20px;
        color: #000;
        margin-right: 30px;

        &:last-child {
            margin-right: 0;
        }
    }

    .active {
        display: inline-block;
        background-color: #000;
        color: #fff;
        padding: 20px;
    }
`;

const NavBar = props => {
    const logUserOutHandler = (event) => {
        event.preventDefault();
        props.onLoggingOut();
        props.history.push('/');
    }

    if (!!localStorage.getItem('userLogged') || props.loggedIn) {
        return (
            <StylesNavBar>
                <Link to="/home" className="heading-secondary"><h2>Tabless Thursday</h2></Link>
                <nav>
                    {/* <i className="fa fa-search" onClick={props.showSearchHandler}> <span>Search</span></i> */}
                    <NavLink to="/home" activeClassName="active" className="nav-links">Tabs</NavLink>
                    <NavLink to="/about" activeClassName="active" className="nav-links">About</NavLink>
                    <Link to="/" className="nav-links" onClick={logUserOutHandler}>Log Out</Link>
                </nav>
            </StylesNavBar>
        )
    } else {
        return (
            <StylesNavBar>
                <Link to="/" className="heading-secondary"><h2>Tabless Thursday</h2></Link>
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