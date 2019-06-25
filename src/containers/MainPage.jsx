import React from 'react';
import { connect } from 'react-redux';
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
        this.props.onGetUserTabs()      
    }

    render() {
        return (
            <StylesMainPage>
                <aside>
                    <AsideBar />
                </aside>
                <main>
                    <TabsContainer history={this.props.history}/>
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