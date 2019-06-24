import React from 'react';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import ModalDelete from './ModalDelete';

const StylesTabCard = styled.section`
    position: relative;
    width: 230px;
    height: 300px;
    perspective: 150rem;
    margin-bottom: 10px;
    
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

            h2 {
                font-size: 1.5rem;
                margin: 0;
                margin-bottom: 5px;
                text-align: center;
            }

            figure {
                width: 100%;
                height: 200px;
                margin: 0;
                border: 3px solid red;
                border-radius: 5px;
            }

            p {
                font-size: 1.2rem;

                span {
                    font-size: 1.2rem;
                    font-weight: bold;
                }
            }
        }

        &.back-side {
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;
            transform: rotateY(180deg); 

            div {
                position: relative;
                width: 100%;
                height: 100%;
                border: 3px solid green;
                padding-top: 30px;

                span {
                    position: absolute;
                    top: 0;
                    right: 0;
                    font-size: 1.8rem;
                    font-weight: bold;
                }
    
                a {
                    display: inline-block;
                    width: 100%;
                    font-size: 1.5rem;
                    text-align: center;
                }
            }

        }
    }

    &:hover .side {
        transform: rotateY(-180deg);
    }

    &:hover .back-side {
        transform: rotateY(0);
    }

`;

const TabCard = (props) => {
    return (
        <StylesTabCard>
            <div className="side front-side">
                <h2>{props.title}</h2>
                <figure>

                </figure>
                <p><span>Description:</span> {props.description}</p>
            </div>
            <div className="side back-side">
                <div>
                    <Link to="/home/delete">X</Link>
                    <a href={props.website} target="_blank">{props.website}</a>
                    <Route path="/home/delete" render={() => <ModalDelete tabId={props.tabId} /> } />
                </div>
            </div>
        </StylesTabCard>
    );
}

export default TabCard;