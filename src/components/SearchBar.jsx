import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { searchTab, undoSearch } from '../store/actions/actions';

const StylesSearchBar = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: ${props => (props.search? 'translate(-50%, 0)': 'translate(-50%, -100%)')};
    display: flex;
    width: 350px;
    height: 50px;
    background-color: red;
    border: 3px solid red;
    border-top: none;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    z-index: 100;
    transition: all 1s ease-in-out;

    i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        font-size: 3.5rem;
        cursor: pointer;
    }

    input {
        width: 260px;
        height: 50px;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        outline: none;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: red;
        border: 3px solid red;
        outline: none;
        cursor: pointer;
    }
`;

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
    }

    searchInputHandler = (event) => {
        this.setState({ searchInput: event.target.value })
    }

    completeSearch = () => {
        this.props.onSearchTab(this.state.searchInput)
        this.setState({ searchInput: '' })
    }

    render() {
        return (
            <StylesSearchBar search={this.props.search}>
                <i className="fa fa-undo" onClick={this.props.onUndoSearch}></i>
                <input 
                    type="text" 
                    value={this.state.searchInput}
                    onChange={this.searchInputHandler}
                    maxLength="16"/>
                <button onClick={this.completeSearch}><i className="fa fa-search" /></button>
            </StylesSearchBar>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearchTab: (searchInput) => dispatch(searchTab(searchInput)),
        onUndoSearch: () => dispatch(undoSearch())
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);
