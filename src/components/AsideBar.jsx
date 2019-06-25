import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StylesAsideBar = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: scroll;

    .aside-links {
        width: 100%;
        list-style: none;
        border: 3px solid red;
        font-size: 2rem;
        font-weight: bold;
        padding: 5px;
        text-align: center;
        cursor: pointer;
    }

    .active {
        background-color: red;
    }

`;

const AsideBar = () => {
    return (
        <StylesAsideBar>
            <NavLink exact to="/home" className="aside-links">Uncategorized</NavLink>
            <NavLink to="/home/category1" className="aside-links">category1</NavLink>
            <NavLink to="/home/category2" className="aside-links">category2</NavLink>
            <NavLink to="/home/category3" className="aside-links">category3</NavLink>
        </StylesAsideBar>
    )
}

export default AsideBar;