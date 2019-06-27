import React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import uuid from 'uuid';

import TabCard from './TabCard';
import SearchBar from './SearchBar';
import fetchSpinner from '../spinners/pacman.svg';

const StylesTabsContainer = styled.section`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    padding: 20px;
    padding-top: 70px;
    overflow: scroll;

    img {
        width: 100%;
        height: 100%;
    }

    .add-wrapper {
        width: 230px;
        height: 330px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid red;
        border-radius: 10px;
        cursor: pointer;
        text-decoration: none;
        margin-bottom: 10px;
        box-shadow: 0 5px 10px #000;

        span {
            font-size: 14rem;
            font-weight: lighter;
        }

        &:hover span {
            color: red;
        }
    }
`;

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