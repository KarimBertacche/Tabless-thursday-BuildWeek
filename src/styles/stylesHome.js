import styled from 'styled-components';
import { colorPrimary, colorSecondary } from './variables/colors';

// STYLES MAIN PAGE
export const StylesMainPage = styled.div`
    display: flex;

    aside {
        position: fixed;
        height: 91.4vh;
        min-width: 200px;
        border: 3px solid ${colorPrimary};
        border-top: none;
        margin-top: 8.4vh;
    }

    main {
        width: 85%;
        height: 91.4vh;
        margin-left: 200px;
        border: 3px solid ${colorPrimary};
        border-top: none;
        margin-top: 8.4vh; 
    }
`;

// STYLES TAB CONTAINER 
export const StylesTabsContainer = styled.section`
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    padding: 20px;
    padding-top: 70px;
    overflow: scroll;

    img {
        width: 100%;
        height: 100%;
    }

    .add-wrapper {
        width: 230px;
        height: 330px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid ${colorPrimary};
        border-radius: 10px;
        cursor: pointer;
        text-decoration: none;
        margin-bottom: 10px;
        box-shadow: 0 5px 10px #000;

        span {
            font-size: 14rem;
            font-weight: lighter;
        }

        &:hover span {
            color: ${colorPrimary};
        }
    }
`;

// STYLES TAB CARD
export const StylesTabCard = styled.section`
    position: relative;
    width: 230px;
    height: 330px;
    perspective: 150rem;
    margin-bottom: 10px;
    
    .side {
        width: 100%;
        height: 100%;
        border: 3px solid ${colorPrimary};
        border-radius: 10px;
        padding: 10px;
        transition: all 1s ease-in-out;
        cursor: pointer;
        backface-visibility: hidden;
        -webkit-backface-visibility: none;
        -moz-backface-visibility: none;
        box-shadow: 0 10px 20px #000;

        &.front-side {
            position: relative;
            background-color: #fff;
            color: #000;
            overflow: hidden;

            h2 {
                font-size: 1.5rem;
                margin: 0;
                margin-bottom: 5px;
                text-align: center;
            }

            .num-tab {
                position: absolute;
                top: 0;
                right: 0;
                border-bottom: 3px solid ${colorPrimary};
                border-left: 3px solid ${colorPrimary};
                border-radius: 50%;
                padding: 2px;
                font-size: 1.3rem;
            }

            figure {
                position: relative;
                width: 100%;
                height: 250px;
                margin: 0;
                border: 3px solid ${colorPrimary};
                border-radius: 5px;
                object-fit: contain;
                overflow: hidden;

                i {
                    position: absolute;
                    top: 0;
                    right: 2%;
                    font-size: 2rem;
                    
                    &.c1 {
                        color: ${colorPrimary};
                    }

                    &.c2 {
                        color: ${colorSecondary};
                    }
                }

                img {
                    width: 100%;
                }
            }

            p {
                font-size: 1.2rem;
                font-weight: bold;
                white-space: nowrap; 
                overflow: hidden;
                text-overflow: ellipsis;

                span {    
                    font-size: 1.2rem;  
                    font-weight: normal;
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
                    background-color: ${colorPrimary};
                    border: 3px solid ${colorPrimary};
                    border-top: none;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    font-size: 1.8rem;
                    font-weight: bold;
                    text-decoration: none;
                    text-align: center;
                    color: ${colorSecondary};
                }

                p {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    font-weight: bold;

                    span, a {
                        font-size: 1.5rem;
                        font-weight: normal;
                    }

                    .website {
                        width: 98%;
                        text-align: center;
                        white-space: nowrap; 
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .description {
                        width: 98%;
                        height: 100px;
                        overflow: hidden;
                        word-wrap: break-word;
                        overflow-wrap: wrap;
                        text-align: center;
                    }
                    
                }

                .update-btn {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80%;
                    background-color: ${colorPrimary};
                    border: 3px solid ${colorPrimary};
                    border-bottom: none;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    font-size: 1.8rem;
                    font-weight: bold;
                    text-decoration: none;
                    text-align: center;
                    color: ${colorSecondary};
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