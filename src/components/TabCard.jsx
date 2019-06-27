import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getUserTabs, tabVisited } from '../store/actions/actions';

const StylesTabCard = styled.section`
    position: relative;
    width: 230px;
    height: 330px;
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
        box-shadow: 0 10px 20px #000;

        &.front-side {
            position: relative;
            background-color: #fff;
            color: #000;
            overflow: hidden;

            h2 {
                font-size: 1.5rem;
                margin: 0;
                margin-bottom: 5px;
                text-align: center;
            }

            .num-tab {
                position: absolute;
                top: 0;
                right: 0;
                border-bottom: 3px solid red;
                border-left: 3px solid red;
                border-radius: 50%;
                padding: 2px;
                font-size: 1.3rem;
            }

            figure {
                position: relative;
                width: 100%;
                height: 250px;
                margin: 0;
                border: 3px solid red;
                border-radius: 5px;
                object-fit: contain;
                overflow: hidden;

                i {
                    position: absolute;
                    top: 0;
                    right: 2%;
                    font-size: 2rem;
                }

                img {
                    width: 100%;
                }
            }

            p {
                font-size: 1.2rem;
                font-weight: bold;
                white-space: nowrap; 
                overflow: hidden;
                text-overflow: ellipsis;

                span {    
                    font-size: 1.2rem;  
                    font-weight: normal;
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
                    text-align: center;
                    color: #000;
                }

                p {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    font-weight: bold;

                    span, a {
                        font-size: 1.5rem;
                        font-weight: normal;
                    }

                    .website {
                        width: 98%;
                        text-align: center;
                        white-space: nowrap; 
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .description {
                        width: 98%;
                        height: 100px;
                        overflow: hidden;
                        word-wrap: break-word;
                        overflow-wrap: wrap;
                        text-align: center;
                    }
                    
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
                    text-align: center;
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
    state = {
        category: this.props.category,
    }


    passDataHandler = (id) =>  {
        const tab = this.props.visitedTabs.filter(tab => tab.tab_id === id);
        localStorage.setItem('tabInfo', JSON.stringify(tab));
        localStorage.setItem('tabId', id);
    }

    deleteCardHandler = (id) => {
        localStorage.setItem('tabID', id);
    }

    visitedTabHandler = () => {
        this.setState({ visited: true });
    }
    
    render() {
        return (
            <StylesTabCard>
                <div className="side front-side">
                    <h2>{this.props.title}</h2>
                    <span className="num-tab">{this.props.tabId}</span>
                    <figure>
                        <i className={this.props.visited ? "fa fa-eye" : "fa fa-eye-slash"}></i>
                        <img src={this.props.favicon} alt={this.props.title} />
                    </figure>
                    <p>Description: <span>{this.props.description}</span></p>
                </div>
                <div className="side back-side">
                    <div>
                        <Link to="/delete" className="delete-btn" onClick={() => this.deleteCardHandler(this.props.tabId)}>DELETE TAB</Link>
                        <p onClick={() => this.props.onTabVisited(this.props.tabId)}>Visited: <span>{ this.props.visited ? 'YES' : 'NO'}</span></p>
                        <p>Category:<span>{this.props.category ? this.state.category : 'N/A'}</span></p>
                        <p>Website:<a href={this.props.website} className="website">{this.props.website}</a></p>
                        <p>Description: <span className="description">{this.props.description}</span></p>
                        <Link to="/update" className="update-btn" onClick={() => this.passDataHandler(this.props.tabId)}>UPDATE TAB</Link> 
                    </div>
                </div>
            </StylesTabCard>
        );
    }
}

const mapStateToProps = state => {
    return {
        visitedTabs: state.visitedTabs,
        deleteMessage: state.deleteMessage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRefreshTabs: () => dispatch(getUserTabs()),
        onTabVisited: (tabId) => dispatch(tabVisited(tabId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabCard);