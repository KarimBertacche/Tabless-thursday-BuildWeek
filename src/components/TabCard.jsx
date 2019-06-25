import React from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import ModalDelete from './modals/ModalDelete';
import ModalUpdate from './modals/ModalUpdate';
import { updateTab, deleteTab, getUserTabs } from '../store/actions/actions';


const StylesTabCard = styled.section`
    position: relative;
    width: 230px;
    height: 300px;
    perspective: 150rem;
    margin-bottom: 10px;
    
    .side {
        width: 100%;
        height: 100%;
        border: 3px solid red;
        border-radius: 10px;
        padding: 10px;
        transition: all 1s ease-in-out;
        cursor: pointer;
        backface-visibility: hidden;
        -webkit-backface-visibility: none;
        -moz-backface-visibility: none;

        &.front-side {
            background-color: #fff;
            color: #000;

            h2 {
                font-size: 1.5rem;
                margin: 0;
                margin-bottom: 5px;
                text-align: center;
            }

            figure {
                width: 100%;
                height: 200px;
                margin: 0;
                border: 3px solid red;
                border-radius: 5px;
            }

            p {
                font-size: 1.2rem;

                span {
                    font-size: 1.2rem;
                    font-weight: bold;
                }
            }
        }

        &.back-side {
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;
            padding: 0;
            transform: rotateY(180deg);
            overflow: hidden;

            div {
                position: relative;
                width: 100%;
                height: 100%;
                padding-top: 30px;

                .delete-btn {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80%;
                    border: 3px solid red;
                    border-top: none;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    font-size: 1.8rem;
                    font-weight: bold;
                    text-decoration: none;
                    color: #000;
                }
    
                a {
                    display: inline-block;
                    width: 100%;
                    font-size: 1.5rem;
                    text-align: center;
                }

                .update-btn {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80%;
                    border: 3px solid red;
                    border-bottom: none;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    font-size: 1.8rem;
                    font-weight: bold;
                    text-decoration: none;
                    color: #000; 
                }
            }

        }
    }

    &:hover .side {
        transform: rotateY(-180deg);
    }

    &:hover .back-side {
        transform: rotateY(0);
    }

`;

class TabCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            website: '',
            description: '',
            category: '',
            id: null
        }
    }

    // passDataHandler = (id) =>  {
    //     const tab = this.props.tabs.filter(tab => tab.tab_id === id);
    //     this.setState({
    //         title: tab[0].title,
    //         website: tab[0].website,
    //         description: tab[0].description,
    //         category: tab[0].category
    //     })   
    // }

    // // clearAllFields = () => {
    // //     this.setState({
    // //         title: '',
    // //         website: '',
    // //         description: '',
    // //         category: ''
    // //     }) 
    // // }

    // changeInputHandler = event => {
    //     this.setState({ [event.target.name]: event.target.value });
    // }

    // updateTabHandler = () => {
    //     let userId = localStorage.getItem('userID');

    //     const newTab = {
    //         title: this.state.title,
    //         website: this.state.website,
    //         user_id: userId,
    //         description: this.state.description,
    //         category: this.state.category
    //     }

    //     this.props.onUpdateTab(newTab);

    //     this.setState({
    //         title: '',
    //         website: '',
    //         description: '',
    //         category: ''
    //     })

    //     this.props.history.push('/home')
    // }

    deleteCardHandler = (id) => {
        localStorage.setItem('tabID', id);
    }

    delCompleteHandler = () => {
        let tabId = localStorage.getItem('tabID');
        this.props.onDeleteTab(tabId);
        localStorage.removeItem('tabID');
        this.props.onRefreshTabs();
    }

    componentDidUpdate() {
        this.props.onRefreshTabs();
    }

    render() {
        return (
            <StylesTabCard>
                <div className="side front-side">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.tabId}</p>
                    <figure>
    
                    </figure>
                    <p><span>Description:</span> {this.props.description}</p>
                </div>
                <div className="side back-side">
                    <div>
                        <Link to="/home/delete" className="delete-btn" onClick={() => this.deleteCardHandler(this.props.tabId)}>DELETE TAB</Link>
                        <a href={this.props.website}>{this.props.website}</a>
                        <Link to="/home/update" className="update-btn"><p onClick={''}>UPDATE TAB</p></Link> 
                        {/* () => this.passDataHandler() */}
                        <Route 
                            path="/home/delete" 
                            render={(props) => {
                                return <ModalDelete 
                                            {...props}
                                            delCompleteHandler={this.delCompleteHandler}
                                        /> 
                            }} 
                        />
                        <Route 
                            exact 
                            path="/home/update" 
                            render={() => {
                                return <ModalUpdate
                                        // {...props} 
                                        title={this.state.title}
                                        website={this.state.website}
                                        description={this.state.description}
                                        category={this.state.category}
                                        changeInputHandler={this.changeInputHandler}
                                        updateTabHandler={this.updateTabHandler}
                                        clearAllFields={this.clearAllFields}
                                        /> 
                            }} 
                        />
                    </div>
                </div>
            </StylesTabCard>
        );
    }
}

const mapStateToProps = state => {
    return {
        deleteMessage: state.deleteMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateTab: (tabInfo) => dispatch(updateTab(tabInfo)),
        onDeleteTab: (id) => dispatch(deleteTab(id)),
        onRefreshTabs: () => dispatch(getUserTabs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabCard);