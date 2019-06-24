import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getUserTabs } from '../store/actions/actions';

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
                    aside
                </aside>
                <main>
                    main
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