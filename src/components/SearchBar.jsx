import React from 'react';
import { connect } from 'react-redux';

import { StylesSearchBar, StylesSearchButton } from '../styles/stylesNavBar';
import { searchTab, undoSearch } from '../store/actions/actions';

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
