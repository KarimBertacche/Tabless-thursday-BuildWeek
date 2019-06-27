import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { StylesMainPage } from '../styles/stylesHome';
import AsideBar from '../components/AsideBar';
import TabsContainer from '../components/TabsContainter';
import { updateTab, getUserTabs, addCategory } from '../store/actions/actions';
import ModalCreate from '../components/modals/ModalCreate'
import ModalDelete from '../components/modals/ModalDelete';
import ModalUpdate from '../components/modals/ModalUpdate';

class MainPage extends React.Component {
    state = {
        toggleCreate: false,
        toggleDelete: false,
        toggleUpdate: false,
        title: '',
        website: '',
        description: '',
        category: '',
        newCategory: ''
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

    toggleModalCreate = () => {
        if(this.state.toggleCreate === true) {
            this.setState({ toggleCreate: false })   
        } else {
            this.setState({ toggleCreate: true });
        }
    }

    updateInfoHandler = () => { 
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

    changeSelectedHandler = event => {
        this.setState({ category: event.target.value })
    }

    updateTabHandler = () => {
        let tabId = localStorage.getItem('tabId');
        let newTab;

        if(this.state.newCategory !== '') {
            this.props.onAddCategory(this.state.newCategory);
            newTab = {
                title: this.state.title,
                website: this.state.website.toLowerCase(),
                description: this.state.description,
                category: this.state.newCategory.toLowerCase(),
            }
        } else {
            newTab = {
                title: this.state.title,
                website: this.state.website.toLowerCase(),
                description: this.state.description,
                category: this.state.category,
            }
        }

        this.props.onUpdateTab(tabId, newTab);

        this.setState({
            title: '',
            website: '',
            description: '',
            category: '',
            newCategory: ''
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
                                        toggleModalCreate={this.toggleModalCreate}
                                        toggleModalDelete={this.toggleModalDelete}
                                        toggleModalUpdate={this.toggleModalUpdate}
                                        updateInfoHandler={this.updateInfoHandler}
                                    /> 
                        }}
                    />
                </main>
                <ModalCreate
                    toggle={this.state.toggleCreate}
                    toggleModalCreate={this.toggleModalCreate} 
                />
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
                    newCategory={this.state.newCategory}
                    changeInputHandler={this.changeInputHandler}
                    updateTabHandler={this.updateTabHandler}
                    changeSelectedHandler={this.changeSelectedHandler}
                />
            </StylesMainPage>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateTab: (id, tabInfo) => dispatch(updateTab(id, tabInfo)),
        onAddCategory: (category) => dispatch(addCategory(category)),
        onRefreshTabs: () => dispatch(getUserTabs())
    }
}

export default connect(null, mapDispatchToProps)(MainPage);