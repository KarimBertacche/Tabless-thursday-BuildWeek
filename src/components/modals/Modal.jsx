import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { postUserTab } from '../../store/actions/actions';

const StylesModal = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0, 0.8);
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


class Modal extends React.Component {
    state = {
        title: '',
        website: '',
        description: '',
        category: '',
        favicon: ''
    }

    changeInputHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    categorySelectedHandler = (event) => {
        debugger
        this.setState({
            category: event.target.value
        })
    }

    postTabHandler = () => {
        let userId = localStorage.getItem('userID');

        const newTab = {
            title: this.state.title,
            website: this.state.website,
            user_id: userId,
            description: this.state.description,
            category: this.state.category,
            favicon: this.state.favicon
        }

        this.props.onPostTab(newTab);

        this.setState({
            title: '',
            website: '',
            description: '',
            category: '',
            favicon: null
        })

        this.props.history.push('/home')
    }

    // fileSelectedHandler = (event) => {
    //     this.setState({
    //         favicon: event.target.files[0],
    //     })
    // }

    render() {
        return ReactDOM.createPortal(
            <StylesModal>
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
                    <label>
                        Choose category from list:
                        <select value={this.state.category} onChange={this.categorySelectedHandler}>
                            <option value="uncategorized" selected>none</option>
                            <option value="category1">caterory1</option>
                            <option value="category2">caterory2</option>
                            <option value="category3">caterory3</option>
                        </select>
                    </label>
                    <input 
                        type="text"
                        name="favicon"
                        value={this.state.favicon}
                        onChange={this.changeInputHandler}
                        placeholder="favicon"/>
                    <button onClick={this.postTabHandler}>Add Tab</button>
                </div>
            </StylesModal>,
            document.querySelector('#portal')
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPostTab: (tabInfo) => dispatch(postUserTab(tabInfo))
    }
}

export default connect(null, mapDispatchToProps)(Modal);