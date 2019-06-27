import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { StylesTabCard } from '../styles/stylesHome';
import { getUserTabs, tabVisited } from '../store/actions/actions';

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
                        <i className={this.props.visited ? "fa fa-eye c1" : "fa fa-eye-slash c2"}></i>
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