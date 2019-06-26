import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { getUserTabs } from '../store/actions/actions';
import AsideBar from '../components/AsideBar';
import TabsContainer from '../components/TabsContainter';

const StylesMainPage = styled.div`
    display: flex;

    aside {
        position: fixed;
        height: 91vh;
        min-width: 200px;
        border: 3px solid red;
        border-top: none;
    }

    main {
        width: 85%;
        height: 91vh;
        margin-left: 200px;
        border: 3px solid red;
        border-top: none;   
    }

`;

class MainPage extends React.Component{
    componentDidMount() {
        this.fetchDataHandler();    
    }

    fetchDataHandler = () => {
        this.props.onGetUserTabs() 
    }

    componentDidUpdate() {
        this.fetchDataHandler(); 
    }

    render() {
        return (
            <StylesMainPage>
                <aside>
                    <AsideBar />
                </aside>
                <main>
                    <Route path="/home" render={(props) => <TabsContainer {...props} search={this.props.search}/> } />
                </main>
            </StylesMainPage>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetUserTabs: (id) => dispatch(getUserTabs(id))
    }
}

export default connect(null, mapDispatchToProps)(MainPage);