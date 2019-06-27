import React from 'react';
import { Route } from 'react-router-dom';

import { StylesMainPage } from '../styles/stylesHome';
import AsideBar from '../components/AsideBar';
import TabsContainer from '../components/TabsContainter';

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