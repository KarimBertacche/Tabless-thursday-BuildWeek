import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { updateTab, getUserTabs } from '../../store/actions/actions';

const StylesModalUpdate = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0, 0.4);
    z-index: 999;

    div {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 300px;
        background-color: yellow;
        border: 3px solid red;
        border-radius: 10px;
        overflow: hidden;
        padding: 40px 20px;
        
        .exit {
            position: absolute;
            top: 2%;
            right: 2%;
            text-decoration: none;
            font-size: 2rem;
            font-weight: bold;
            cursor: pointer;
        }

        input {
            height: 30px;
            border-radius: 5px;
            margin-bottom: 10px;
            font-size: 1.5rem;
            text-align: center;
            outline: none;

            &::placeholder {
                font-weight: bold;
            }
        }

        button {
            width: 30%;
            min-width: 150px;
            margin: 0 auto;
            border: 3px solid red;
            border-radius: 20px;
            padding: 5px;
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
        }
    }

`;

class ModalUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            website: '',
            description: '',
            category: '',
        }
    }

    componentDidMount() {
        debugger
       this.updateInfoHandler(); 
    }

    updateInfoHandler = () => {
        const tabInfo = JSON.parse(localStorage.getItem('tabInfo'));
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
        debugger
        this.props.onUpdateTab(tabId, newTab);

        this.setState({
            title: '',
            website: '',
            description: '',
            category: ''
        })

        localStorage.removeItem('tabId');
        this.props.onRefreshTabs();
        this.props.history.push('/home');
    }

    render() {
        return ReactDOM.createPortal(
            <StylesModalUpdate>
                <div>
                    <Link to="/home" className="exit">X</Link>
                    <input 
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                        placeholder="title"
                        required/>
                    <input 
                        type="text"
                        name="website"
                        value={this.state.website}
                        onChange={this.changeInputHandler}
                        placeholder="website"
                        required/>
                    <input 
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.changeInputHandler}
                        placeholder="description"
                        required/>
                    <input 
                        type="text"
                        name="category"
                        value={this.state.category}
                        onChange={this.changeInputHandler}
                        placeholder="category"/>
                    <button onClick={this.updateTabHandler}>Update Tab</button>
                </div>
            </StylesModalUpdate>,
            document.querySelector('#updatePortal')
        );
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onUpdateTab: (id, tabInfo) => dispatch(updateTab(id, tabInfo)),
        onRefreshTabs: () => dispatch(getUserTabs())
    }
}

export default connect(null, mapDispatchToProps)(ModalUpdate);