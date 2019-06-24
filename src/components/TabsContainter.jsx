import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StylesTabsContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 20px;

    .add-wrapper {
        width: 230px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid red;
        border-radius: 10px;
        cursor: pointer;
        text-decoration: none;

        span {
            font-size: 14rem;
            font-weight: lighter;
        }

        &:hover span {
            color: red;
        }
    }

    .card-wrapper {
        position: relative;
        width: 230px;
        height: 300px;
        perspective: 150rem;
        
        .side {
            width: 100%;
            height: 100%;
            border: 3px solid red;
            border-radius: 10px;
            padding: 10px;
            transition: all 1s ease-in-out;
            cursor: pointer;
            backface-visibility: hidden;
            -webkit-backface-visibility: none;
            -moz-backface-visibility: none;

            &.front-side {
                background-color: #fff;
                color: #000;
            }

            &.back-side {
                position: absolute;
                top: 0;
                left: 0;
                background-color: green;
                transform: rotateY(180deg);
            }
        }

        &:hover .side {
            transform: rotateY(-180deg);
        }

        &:hover .back-side {
            transform: rotateY(0);
        }
    }

`;

const TabsContainer = props => {
    return (
        <StylesTabsContainer>
            <Link to="/home/new" className="add-wrapper" >
                <span>+</span>
            </Link>
            <div className="card-wrapper">
                <div className="side front-side">
                    FRONT
                </div>
                <div className="side back-side">
                    BACK
                </div>
            </div>
            
        </StylesTabsContainer>
    );
}

export default TabsContainer;