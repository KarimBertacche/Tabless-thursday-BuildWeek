import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
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
                            <button className="add-wrapper" onClick={this.props.toggleModalCreate}>
                                <span>+</span>
                            </button>
                                { 
                                                                       this.props.visitedTabs 
                                                                       ?   this.props.visitedTabs.map(tab => {
                                                                               return( 
                                                                                   <React.Fragment key={uuid()}>
                                                                                       <Switch>
                                                                                           <Route     
                                                                                               exact
                                                                                               strict
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
                                                                                           <Route
                                                                                               exact
                                                                                               strict
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
                                                                                       </Switch>
                                                                                       <Route
                                                                                           path="/home/unseen"
                                                                                           render={(props) => {
                                                                                               if(!tab.visited) {
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
                                                                                           path="/home/seen"
                                                                                           render={(props) => {
                                                                                               if(tab.visited === true) {
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
                                                                                   </React.Fragment>
                                                                               );            
                                                                           })
                                                                       :   this.props.tabs.map(tab => {
                                                                               return( 
                                                                                   <React.Fragment key={uuid()}>
                                                                                       <Switch>
                                                                                           <Route
                                                                                               exact
                                                                                               strict
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
                                                                                           <Route
                                                                                               exact
                                                                                               strict
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
                                                                                       </Switch>
                                                                                       <Route
                                                                                           path="/home/unseen"
                                                                                           render={(props) => {
                                                                                               if(!tab.visited) {
                                                                                                   debugger
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
                                                                                           path="/home/seen"
                                                                                           render={(props) => {
                                                                                               if(tab.visited === true) {
                                                                                                   debugger
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
                                                                                   </React.Fragment>
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
        visitedTabs: state.data.visitedTabs,
        fetchLoading: state.data.fetchLoading 
    }
}

export default connect(mapStateToProps)(TabsContainer);