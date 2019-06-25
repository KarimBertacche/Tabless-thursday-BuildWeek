import React from 'react';
import styled from 'styled-components';

const StylesAsideBar = styled.ul`
    width: 100%;
    height: 100%;
    border: 3px solid blue;
    margin: 0;
    padding: 0;
    overflow: scroll;

    li {
        width: 100%;
        list-style: none;
        border: 3px solid red;
        font-size: 2rem;
        font-weight: bold;
        padding: 5px;
        text-align: center;
        cursor: pointer;
    }

`;

const AsideBar = () => {
    return (
        <StylesAsideBar>
            <li>All</li>
        </StylesAsideBar>
    )
}

export default AsideBar;