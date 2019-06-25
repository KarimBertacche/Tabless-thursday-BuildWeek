import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const ModalUpdate = props => {
    // const clearTabHandler = () => {
    //     props.clearAllFields();
    // }

    return ReactDOM.createPortal(
        <StylesModalUpdate>
            <div>
                <Link to="/home" className="exit">X</Link>
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
        </StylesModalUpdate>,
        document.querySelector('#updatePortal')
    );
};

export default ModalUpdate;