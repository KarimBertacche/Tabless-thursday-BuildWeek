import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import uuid from 'uuid';

import { removeCategory, undoSearch } from '../store/actions/actions';

const StylesAsideBar = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: scroll;

    .aside-links {
        position: relative;
        width: 100%;
        list-style: none;
        border: 3px solid red;
        font-size: 2rem;
        font-weight: bold;
        padding: 5px;
        text-align: center;
        cursor: pointer;
        transform: translateX(10%);
        transition: all .5s ease-in-out;

        span {
            position: absolute;
            right: 2%;
            font-size: 2rem;

            &:hover {
                color: #fff;
            }
        }

        &:hover {
            background-color: red;
            transform: translateX(0);
        }
    }

    .active {
        background-color: red;
        transform: translateX(0);
    }

    .active span {
        display: none;
    }

`;

const AsideBar = (props) => {
    return (
        <StylesAsideBar>
            <NavLink exact to="/home" className="aside-links" onClick={props.onUndoSearch}>All</NavLink>
            { 
                props.categories.map(category => {
                    return <NavLink 
                                key={uuid()} 
                                to={`/home/${category}`} 
                                className="aside-links"
                            >{category}<span onClick={() => props.onRemoveCategory(category)}>X</span></NavLink>
                })
            }
        </StylesAsideBar>
    )
}

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCategory: (category) => dispatch(removeCategory(category)),
        onUndoSearch: () => dispatch(undoSearch())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideBar);