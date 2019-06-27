import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { StylesMainPage } from '../styles/stylesHome';
import AsideBar from '../components/AsideBar';
import TabsContainer from '../components/TabsContainter';
import { updateTab, getUserTabs } from '../store/actions/actions';
import ModalDelete from '../components/modals/ModalDelete';
import ModalUpdate from '../components/modals/ModalUpdate';

class MainPage extends React.Component {
    state = {
        toggleDelete: false,
        toggleUpdate: false,
        title: '',
        website: '',
        description: '',
        category: '',
    }

    toggleModalDelete = () => {
        if(this.state.toggleDelete === true) {
            this.setState({ toggleDelete: false })   
        } else {
            this.setState({ toggleDelete: true })
        }
    }

    toggleModalUpdate = () => {
        if(this.state.toggleUpdate === true) {
            this.setState({ toggleUpdate: false })   
        } else {
            this.setState({ toggleUpdate: true });
        }
    }

    updateInfoHandler = () => { 
        debugger;
        const tabInfo = JSON.parse(localStorage.getItem('tabInfo'));
        console.log(tabInfo)
        this.setState({
            title: tabInfo[0].title,
            website: tabInfo[0].website,
            description: tabInfo[0].description,
            category: tabInfo[0].category
        })
    }

    changeInputHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    updateTabHandler = () => {
        let tabId = localStorage.getItem('tabId');

        const newTab = {
            title: this.state.title,
            website: this.state.website,
            description: this.state.description,
            category: this.state.category
        }

        this.props.onUpdateTab(tabId, newTab);

        this.setState({
            title: '',
            website: '',
            description: '',
            category: ''
        })

        localStorage.removeItem('tabId');
        this.toggleModalUpdate();
        this.props.onRefreshTabs();   
    }

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
                                        toggleModalDelete={this.toggleModalDelete}
                                        toggleModalUpdate={this.toggleModalUpdate}
                                        updateInfoHandler={this.updateInfoHandler}
                                    /> 
                        }}
                    />
                </main>
                <ModalDelete 
                    toggle={this.state.toggleDelete}
                    toggleModalDelete={this.toggleModalDelete}
                />
                <ModalUpdate
                    toggle={this.state.toggleUpdate}
                    toggleModalUpdate={this.toggleModalUpdate}
                    title={this.state.title}
                    website={this.state.website}
                    description={this.state.description}
                    category={this.state.category}
                    changeInputHandler={this.changeInputHandler}
                    updateTabHandler={this.updateTabHandler}
                />
            </StylesMainPage>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateTab: (id, tabInfo) => dispatch(updateTab(id, tabInfo)),
        onRefreshTabs: () => dispatch(getUserTabs())
    }
}

export default connect(null, mapDispatchToProps)(MainPage);