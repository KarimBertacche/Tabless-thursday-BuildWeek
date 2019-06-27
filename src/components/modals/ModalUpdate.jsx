import React from 'react';

import { StylesModalUpdate } from '../../styles/stylesModals';

const ModalUpdate = props => {
    return (
        <StylesModalUpdate className={props.toggle ? 'show' : 'hide'}>
            <div>
                <button className="exit" onClick={props.toggleModalUpdate}>X</button>
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
                <input 
                    type="text"
                    name="category"
                    value={props.category}
                    onChange={props.changeInputHandler}
                    placeholder="category"/>
                <button onClick={props.updateTabHandler}>Update Tab</button>
            </div>
        </StylesModalUpdate>
    );
};

export default ModalUpdate;