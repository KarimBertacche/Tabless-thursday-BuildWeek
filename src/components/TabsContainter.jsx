import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import uuid from 'uuid';

import { StylesTabsContainer } from '../styles/stylesHome';
import TabCard from './TabCard';
import SearchBar from './SearchBar';
import fetchSpinner from '../spinners/pacman.svg';

const TabsContainer = props => {
    return (
        <>
            { 
                props.fetchLoading
                ?   <StylesTabsContainer><img src={fetchSpinner} alt="pacman spinner" /></StylesTabsContainer>
                :   <StylesTabsContainer>
                        <SearchBar search={props.search} showSearchHandler={props.showSearchHandler}/>
                        <Link to="/new" className="add-wrapper" >
                            <span>+</span>
                        </Link>
                            {
                                props.visitedTabs 
                                ?   props.visitedTabs.map(tab => {
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
                                                                tabs={props.tabs}
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
                                                            tabs={props.tabs}
                                                        /> 
                                                    }}
                                                />
                                            </Switch>
                                        );            
                                    })
                                :   props.tabs.map(tab => {
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
                                                                tabs={props.tabs}
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
                                                            tabs={props.tabs}
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

const mapStateToProps = state => {
    return {
        tabs: state.tabs,
        visitedTabs: state.visitedTabs,
        fetchLoading: state.fetchLoading 
    }
}

export default connect(mapStateToProps)(TabsContainer);