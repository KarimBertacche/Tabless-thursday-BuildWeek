import React from 'react';
import { connect } from 'react-redux';

import { StylesTabCard } from '../styles/stylesHome';
import { getUserTabs, tabVisited } from '../store/actions/actionsCreators';

class TabCard extends React.Component {
    state = {
        category: this.props.category,
    }

    passDataHandler = (id) =>  {
        const tab = this.props.visitedTabs.filter(tab => tab.tab_id === id);
        localStorage.setItem('tabInfo', JSON.stringify(tab));
        localStorage.setItem('tabId', id);
        this.props.toggleModalUpdate();
        this.props.updateInfoHandler();
    }

    deleteCardHandler = (id) => {
        localStorage.setItem('tabID', id);
        this.props.toggleModalDelete();
    }
    
    render() {
        return (
            <StylesTabCard>
                <div className="side front-side">
                    <i className={this.props.visited ? "fa fa-eye c1" : "fa fa-eye-slash c2"}></i>
                    <h2>{this.props.title}</h2>
                    <span className="num-tab">{this.props.tabId}</span>
                    <figure>
                        <img src={this.props.favicon} alt={this.props.title} />
                    </figure>
                    <p>Description: <span>{this.props.description}</span></p>
                </div>
                <div className="side back-side">
                    <div>
                        <button className="delete-btn" onClick={() => this.deleteCardHandler(this.props.tabId)}>DELETE TAB</button>
                        <p onClick={() => this.props.onTabVisited(this.props.tabId)}>Visited: <span>{ this.props.visited ? 'YES' : 'NO'}</span></p>
                        <p>Category:<span>{this.props.category ? this.state.category : 'N/A'}</span></p>
                        <p>Website:<a href={this.props.website} className="website">{this.props.website}</a></p>
                        <p>Description: <span className="description">{this.props.description}</span></p>
                        <button className="update-btn" onClick={() => this.passDataHandler(this.props.tabId)}>UPDATE TAB</button> 
                    </div>
                </div>
            </StylesTabCard>
        );
    }
}

const mapStateToProps = state => {
    return {
        visitedTabs: state.data.visitedTabs,
        deleteMessage: state.data.deleteMessage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRefreshTabs: () => dispatch(getUserTabs()),
        onTabVisited: (tabId) => dispatch(tabVisited(tabId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabCard);