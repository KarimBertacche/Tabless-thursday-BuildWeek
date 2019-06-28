import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { StylesModalUpdate } from '../../styles/stylesModals';

const ModalUpdate = props => {
    return (
        <StylesModalUpdate className={props.toggle ? 'show' : 'hide'}>
            <div>
                <p className="exit" onClick={props.toggleModalUpdate}>X</p>
                <input 
                    type="text"
                    name="title"
                    value={props.title}
                    onChange={props.changeInputHandler}
                    placeholder="title"
                    required/>
                <input 
                    type="text"
                    name="website"
                    value={props.website}
                    onChange={props.changeInputHandler}
                    placeholder="website"
                    required/>
                <input 
                    type="text"
                    name="description"
                    value={props.description}
                    onChange={props.changeInputHandler}
                    placeholder="description"
                    required/>
                <label>
                    Choose category from list: <br/>
                    <select 
                        value={props.category}
                        onChange={props.changeSelectedHandler}>
                        <option value="uncategorized">none</option>
                        {
                            props.categories.map(category => {
                                return  <option 
                                            key={uuid()} 
                                            value={category}
                                        >{category}</option>
                            })
                        }
                    </select>
                </label>
                <input 
                    type="text"
                    name="newCategory"
                    value={props.newCategory}
                    onChange={props.changeInputHandler}
                    placeholder="add new category"
                    maxLength="13"/>
                <button onClick={props.updateTabHandler}>Update Tab</button>
            </div>
        </StylesModalUpdate>
    );
};

const mapStateToProps = state => {
    return {
        categories: state.data.categories
    }
}

export default connect(mapStateToProps)(ModalUpdate);