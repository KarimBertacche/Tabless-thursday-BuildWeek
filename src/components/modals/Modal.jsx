import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import uuid from 'uuid';

import { postUserTab, addCategory } from '../../store/actions/actions';

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
        favicon: '',
        newCategory: ''
    }

    changeInputHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    categorySelectedHandler = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    postTabHandler = () => {
        let userId = localStorage.getItem('userID');

        let newTab;

        if(this.state.newCategory !== '') {
            this.props.onAddCategory(this.state.newCategory);
            newTab = {
                title: this.state.title,
                website: this.state.website.toLowerCase(),
                user_id: userId,
                description: this.state.description.toLowerCase(),
                category: this.state.newCategory.toLowerCase(),
                favicon: this.state.favicon
            }
        } else {
            newTab = {
                title: this.state.title,
                website: this.state.website.toLowerCase(),
                user_id: userId,
                description: this.state.description.toLowerCase(),
                category: this.state.category.toLowerCase(),
                favicon: this.state.favicon
            }
        }
        
        this.props.onPostTab(newTab);

        this.setState({
            title: '',
            website: '',
            description: '',
            category: '',
            favicon: null,
            newCategory: ''
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
                        maxLength="16"
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
                        maxLength="120"
                        required/>
                    <label>
                        Choose category from list:
                        <select value={this.state.category} onChange={this.categorySelectedHandler}>
                            <option value="uncategorized">none</option>
                            {
                                this.props.categories.map(category => {
                                    return <option key={uuid()} value={category}>{category}</option>
                                })
                            }
                        </select>
                    </label>
                    <input 
                        type="text"
                        name="newCategory"
                        value={this.state.newCategory}
                        onChange={this.changeInputHandler}
                        placeholder="add new category"/>
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

const mapStateToProps = state => {
    return {
        categories: state.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPostTab: (tabInfo) => dispatch(postUserTab(tabInfo)),
        onAddCategory: (category) => dispatch(addCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);