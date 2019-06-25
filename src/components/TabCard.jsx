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
            padding: 0;
            transform: rotateY(180deg);
            overflow: hidden;

            div {
                position: relative;
                width: 100%;
                height: 100%;
                padding-top: 30px;

                .delete-btn {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80%;
                    border: 3px solid red;
                    border-top: none;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    font-size: 1.8rem;
                    font-weight: bold;
                    text-decoration: none;
                    color: #000;
                }
    
                a {
                    display: inline-block;
                    width: 100%;
                    font-size: 1.5rem;
                    text-align: center;
                }

                .update-btn {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80%;
                    border: 3px solid red;
                    border-bottom: none;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    font-size: 1.8rem;
                    font-weight: bold;
                    text-decoration: none;
                    color: #000; 
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
                    <Link to="/home/delete" className="delete-btn">DELETE TAB</Link>
                    <a href={props.website} target="_blank" rel="external">{props.website}</a>
                    <Link to="/home/update" className="update-btn">UPDATE TAB</Link>
                    <Route path="/home/delete" render={() => <ModalDelete tabId={props.tabId} /> } />
                </div>
            </div>
        </StylesTabCard>
    );
}

export default TabCard;