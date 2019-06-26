import React from 'react';
import styled from 'styled-components';

const StylesSearchBar = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: ${props => (props.search? 'translate(-50%, 0)': 'translate(-50%, -100%)')};
    display: flex;
    width: 350px;
    height: 50px;
    background-color: red;
    border: 3px solid red;
    border-top: none;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    z-index: 100;
    transition: all 1s ease-in-out;

    i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        font-size: 3.5rem;
    }

    input {
        width: 200px;
        height: 50px;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        outline: none;
    }

    button {
        width: 100px;
        height: 50px;
        background-color: red;
        border: 3px solid red;
        font-size: 2rem;
        font-weight: bold;
        outline: none;
        cursor: pointer;
    }
`;

export default function SearchBar(props) {

    console.log(props.search)

    return (
        <StylesSearchBar search={props.search}>
            <i class="fa fa-undo"></i>
            <input type="text" />
            <button>Search</button>
        </StylesSearchBar>
    );
}