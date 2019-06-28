import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { StylesAsideBar } from '../styles/stylesNavBar';
import { removeCategory, undoSearch, addCategoryLink } from '../store/actions/actionsCreators';

class AsideBar extends React.Component {
    state = {
        addLink: false,
        linkInput: ''
    }

    changeInputHandler = (event) => {
        this.setState({ linkInput: event.target.value})
    }

    addCategoryHandler = () => {
        if(this.state.linkInput !== "") {
            this.props.onAddCategory(this.state.linkInput.toLowerCase());
        }
        this.toggleInputHandler();
        this.setState({ linkInput: '' });
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
                <NavLink exact to="/home" className="aside-links">All</NavLink>
                <NavLink to="/home/unseen" className="aside-links">Unvisited</NavLink>
                <NavLink to="/home/seen" className="aside-links">Visited</NavLink>
                { 
                    this.props.categories.map(category => {
                        return <NavLink 
                                    key={uuid()} 
                                    to={`/home/${category.toLowerCase()}`} 
                                    className="aside-links"
                                >{category.toLowerCase()}<span onClick={() => this.props.onRemoveCategory(category)}>X</span></NavLink>
                    })
                }
                {
                    this.state.addLink
                    ? <li onClick={this.addCategoryHandler}><i className="fa fa-arrow-circle-up"></i></li>
                    : <li onClick={this.toggleInputHandler}><i className="fa fa-plus-circle"></i></li>
                }
                <input 
                    className={this.state.addLink ? 'show' : 'hide'}
                    type="text"
                    value={this.state.linkInput}
                    onChange={this.changeInputHandler}
                    maxLength="13"
                    placeholder="Add category"/>
            </StylesAsideBar>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.data.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRemoveCategory: (category) => dispatch(removeCategory(category)),
        onUndoSearch: () => dispatch(undoSearch()),
        onAddCategory: (category) => dispatch(addCategoryLink(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideBar);