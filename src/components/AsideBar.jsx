import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { StylesAsideBar } from '../styles/stylesNavBar';
import { removeCategory, undoSearch } from '../store/actions/actions';

class AsideBar extends React.Component {
    state = {
        addLink: false,
        linkInput: ''
    }

    changeInputHandler = (event) => {
        this.setState({ linkInput: event.target.value})
    }

    toggleInputHandler = () => {
        if(this.state.addLink === false) {
            this.setState({ addLink: true });
        } else {
            this.setState({ addLink: false });
        }
    }

    render() {
        return (
            <StylesAsideBar>
                <NavLink exact to="/home" className="aside-links" onClick={this.props.onUndoSearch}>All</NavLink>
                { 
                    this.props.categories.map(category => {
                        return <NavLink 
                                    key={uuid()} 
                                    to={`/home/${category}`} 
                                    className="aside-links"
                                >{category}<span onClick={() => this.props.onRemoveCategory(category)}>X</span></NavLink>
                    })
                }
                {
                    this.state.addLink
                    ? <li onClick={this.toggleInputHandler}><i class="fa fa-arrow-circle-up"></i></li>
                    : <li onClick={this.toggleInputHandler}><i class="fa fa-plus-circle"></i></li>
                }
                <input 
                    className={this.state.addLink ? 'show' : 'hide'}
                    type="text"
                    maxLength="13"
                    placeholder="Add category"/>
            </StylesAsideBar>
        )
    }
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