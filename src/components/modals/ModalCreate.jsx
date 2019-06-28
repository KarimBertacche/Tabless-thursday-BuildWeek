import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { StylesModalCreate } from '../../styles/stylesModals';
import { postUserTab, addCategory, getUserTabs } from '../../store/actions/actionsCreators';

class ModalCreate extends React.Component {
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
        if(this.state.title !== '' && this.state.website !== ''){
            if(this.state.newCategory !== '') {
                this.props.onAddCategory(this.state.newCategory);
                newTab = {
                    title: this.state.title,
                    website: this.state.website.toLowerCase(),
                    user_id: userId,
                    description: this.state.description,
                    category: this.state.newCategory.toLowerCase(),
                    favicon: this.state.favicon || 'https://c7.uihere.com/files/243/617/293/clark-kent-t-shirt-darkseid-superman-logo-cartoon-cartoon-superman.jpg'
                }
            } else {
                newTab = {
                    title: this.state.title,
                    website: this.state.website.toLowerCase(),
                    user_id: userId,
                    description: this.state.description,
                    category: this.state.category,
                    favicon: this.state.favicon || 'https://c7.uihere.com/files/243/617/293/clark-kent-t-shirt-darkseid-superman-logo-cartoon-cartoon-superman.jpg'
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
    
            this.props.toggleModalCreate();
            this.props.onRefreshTabs();
        }
        return null; 
    }

    // fileSelectedHandler = (event) => {
    //     this.setState({
    //         favicon: event.target.files[0],
    //     })
    // }

    render() {
        return (
            <StylesModalCreate className={this.props.toggle ? 'show' : 'hide'}>
                <div>
                    <p className="exit" onClick={this.props.toggleModalCreate}>X</p>
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
                    <input 
                        type="text"
                        name="favicon"
                        value={this.state.favicon}
                        onChange={this.changeInputHandler}
                        placeholder="favicon"/>
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
                        placeholder="add new category"
                        maxLength="13"/>
                    <button onClick={this.postTabHandler}>Add Tab</button>
                </div>
            </StylesModalCreate>
        );
    }
};

const mapStateToProps = state => {
    return {
        categories: state.data.categories
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPostTab: (tabInfo) => dispatch(postUserTab(tabInfo)),
        onAddCategory: (category) => dispatch(addCategory(category)),
        onRefreshTabs: () => dispatch(getUserTabs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalCreate);