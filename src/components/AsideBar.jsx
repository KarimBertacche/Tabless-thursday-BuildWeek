import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { StylesAsideBar } from '../styles/stylesNavBar';
import { removeCategory, undoSearch } from '../store/actions/actions';

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
            <li>+</li>
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