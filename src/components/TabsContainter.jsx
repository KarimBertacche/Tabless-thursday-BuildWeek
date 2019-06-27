import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import uuid from 'uuid';

import { StylesTabsContainer } from '../styles/stylesHome';
import TabCard from './TabCard';
import SearchBar from './SearchBar';
import fetchSpinner from '../spinners/pacman.svg';

class TabsContainer extends React.Component {
    render() {
        return (
            <>
                { 
                    this.props.fetchLoading
                    ?   <StylesTabsContainer><img src={fetchSpinner} alt="pacman spinner" /></StylesTabsContainer>
                    :   <StylesTabsContainer>
                            <SearchBar search={this.props.search} showSearchHandler={this.props.showSearchHandler}/>
                            <Link to="/new" className="add-wrapper" >
                                <span>+</span>
                            </Link>
                                {
                                    this.props.visitedTabs 
                                    ?   this.props.visitedTabs.map(tab => {
                                            return( 
                                                <Switch key={uuid()}>
                                                    <Route
                                                        path="/home/:category"
                                                        render={(props) => {
                                                            if(props.match.params.category === tab.category && tab.category !== null) {
                                                                return <TabCard
                                                                    {...props}
                                                                    username={tab.username}
                                                                    title={tab.title}
                                                                    description={tab.description}
                                                                    website={tab.website}
                                                                    favicon={tab.favicon}
                                                                    category={tab.category}
                                                                    visited={tab.visited}
                                                                    tabId={tab.tab_id}
                                                                    tabs={this.props.tabs}
                                                                    toggleModalDelete={this.props.toggleModalDelete}
                                                                    toggleModalUpdate={this.props.toggleModalUpdate}
                                                                    updateInfoHandler={this.props.updateInfoHandler}
                                                                /> 
                                                            }
                                                        }}
                                                    />
                                                    <Route
                                                        path="/home"
                                                        render={(props) => {
                                                            return <TabCard
                                                                {...props}
                                                                username={tab.username}
                                                                title={tab.title}
                                                                description={tab.description}
                                                                website={tab.website}
                                                                favicon={tab.favicon}
                                                                category={tab.category}
                                                                visited={tab.visited}
                                                                tabId={tab.tab_id}
                                                                tabs={this.props.tabs}
                                                                toggleModalDelete={this.props.toggleModalDelete}
                                                                toggleModalUpdate={this.props.toggleModalUpdate}
                                                                updateInfoHandler={this.props.updateInfoHandler}
                                                            /> 
                                                        }}
                                                    />
                                                </Switch>
                                            );            
                                        })
                                    :   this.props.tabs.map(tab => {
                                            return( 
                                                <Switch key={uuid()}>
                                                    <Route
                                                        path="/home/:category"
                                                        render={(props) => {
                                                            if(props.match.params.category === tab.category && tab.category !== null) {
                                                                return <TabCard
                                                                    {...props}
                                                                    username={tab.username}
                                                                    title={tab.title}
                                                                    description={tab.description}
                                                                    website={tab.website}
                                                                    favicon={tab.favicon}
                                                                    category={tab.category}
                                                                    visited={tab.visited}
                                                                    tabId={tab.tab_id}
                                                                    tabs={this.props.tabs}
                                                                    toggleModalDelete={this.props.toggleModalDelete}
                                                                    toggleModalUpdate={this.props.toggleModalUpdate}
                                                                    updateInfoHandler={this.props.updateInfoHandler}
                                                                /> 
                                                            }
                                                        }}
                                                    />
                                                    <Route
                                                        path="/home"
                                                        render={(props) => {
                                                            return <TabCard
                                                                {...props}
                                                                username={tab.username}
                                                                title={tab.title}
                                                                description={tab.description}
                                                                website={tab.website}
                                                                favicon={tab.favicon}
                                                                category={tab.category}
                                                                visited={tab.visited}
                                                                tabId={tab.tab_id}
                                                                tabs={this.props.tabs}
                                                                toggleModalDelete={this.props.toggleModalDelete}
                                                                toggleModalUpdate={this.props.toggleModalUpdate}
                                                                updateInfoHandler={this.props.updateInfoHandler}
                                                            /> 
                                                        }}
                                                    />
                                                </Switch>
                                            );            
                                        })
                                }
                        </StylesTabsContainer>
                }
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        tabs: state.tabs,
        visitedTabs: state.visitedTabs,
        fetchLoading: state.fetchLoading 
    }
}

export default connect(mapStateToProps)(TabsContainer);