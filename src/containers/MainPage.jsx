import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import AsideBar from '../components/AsideBar';
import TabsContainer from '../components/TabsContainter';

const StylesMainPage = styled.div`
    display: flex;

    aside {
        position: fixed;
        height: 91.4vh;
        min-width: 200px;
        border: 3px solid red;
        border-top: none;
        margin-top: 8.4vh;
    }

    main {
        width: 85%;
        height: 91.4vh;
        margin-left: 200px;
        border: 3px solid red;
        border-top: none;
        margin-top: 8.4vh; 
    }

`;

class MainPage extends React.Component {
    render() {
        return (
            <StylesMainPage>
                <aside>
                    <AsideBar />
                </aside>
                <main>
                    <Route 
                        path="/home" 
                        render={(props) => {
                            return  <TabsContainer 
                                        {...props} 
                                        search={this.props.search}
                                        showSearchHandler={this.props.showSearchHandler}
                                    /> 
                        }}
                    />
                </main>
            </StylesMainPage>
        )
    }
}

export default MainPage;