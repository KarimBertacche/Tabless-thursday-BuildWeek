import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { searchTab, undoSearch } from '../store/actions/actions';

const StylesSearchBar = styled.div`
    position: fixed;
    top: 8.8vh;
    left: 50%;
    transform: ${props => (props.search? 'translate(-50%, 0)': 'translate(-50%, -100%)')};
    transform: translate(-50%, 0);
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
    box-shadow: 0 5px 10px #000, 0 5px 10px #000, 0 5px 10px #000;

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

const StylesSearchButton = styled.section`
    position: fixed;
    top: 8.5%;
    left: 50%;
    transform: ${props => (props.search? 'translate(-50%, -100%)': 'translate(-50%, 0)')};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px; 
    background-color: red;
    border: 3px solid red;
    border-top: none;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    z-index: 100;
    transition: all 5s ease-in-out;
    box-shadow: 0 5px 10px #000, 0 5px 10px #000, 0 5px 10px #000;

    i {
        font-size: 3rem;
        font-weight: bold;
        cursor: pointer;
        z-index: 2000;
        outline: none;

        span {
            font-size: 2.5rem;
        }
    }
`;

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            search: false
        }
    }

    searchInputHandler = (event) => {
        this.setState({ searchInput: event.target.value })
    }

    completeSearch = () => {
        this.props.onSearchTab(this.state.searchInput)
        this.setState({ searchInput: '' })
    }

    closeSearchBar = () => {
        this.activateSearchBar();
        this.props.onUndoSearch()
    }

    activateSearchBar = () => {
        if(this.state.search) {
            this.setState({
                search: false
            })
        } else {
            this.setState({
                search: true
            })
        }
    }

    render() {
        return (
            <>
                {
                    !this.state.search
                    ?   <StylesSearchButton search={this.state.search}>
                            <i className="fa fa-search" onClick={this.activateSearchBar}> <span>Search</span></i>
                        </StylesSearchButton>
                    :    <StylesSearchBar search={this.state.search}>
                            <i className="fa fa-undo" onClick={this.closeSearchBar}></i>
                            <input 
                                type="text" 
                                value={this.state.searchInput}
                                onChange={this.searchInputHandler}
                                maxLength="16"
                            />
                            <button onClick={this.completeSearch}><i className="fa fa-search" /></button>
                        </StylesSearchBar>
                }
            </>
           
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
