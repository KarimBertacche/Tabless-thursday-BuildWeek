import styled from 'styled-components';

import { colorPrimary, colorSecondary, red } from './variables/colors';

// MODAL CREATE STYLES
export const StylesModalCreate = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0, 0.4);
    z-index: 999;

    &.hide {
        display: none;
    }

    &.show {
        display: flex;
    }

    div {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 450px;
        height: 400px;
        background-color: ${colorPrimary};
        border: 3px solid ${colorSecondary};
        border-radius: 10px;
        overflow: hidden;
        padding: 40px 20px;
        color: ${colorSecondary};
        
        .exit {
            position: absolute;
            top: -5%;
            right: 2%;
            text-decoration: none;
            font-size: 2.3rem;
            font-weight: bold;
            cursor: pointer;
            color: #fff;

            &:hover {
                transform: scale(1.2);
                color: ${colorSecondary};
            }
        }

        input {
            height: 35px;
            border: 3px solid ${colorSecondary};
            border-radius: 5px;
            margin-bottom: 10px;
            font-size: 1.8rem;
            font-weight: bold;
            text-align: center;
            color: ${colorSecondary};
            outline: none;

            &::placeholder {
                font-weight: bold;
            }
        }

        label {
            width: 100%;
            text-align: center;
            font-size: 2rem;
            font-weight: bold;

            select {
                width: 100%;
                border: 3px solid ${colorSecondary};
                font-size: 2rem;
                font-weight: bold;
                text-align-last:center;
                margin-top: 10px;
                color: ${colorSecondary};
                outline: none;
            }
        }

        button {
            width: 30%;
            min-width: 150px;
            margin: 0 auto;
            margin-top: 25px;
            border: 3px solid ${colorSecondary};
            border-radius: 20px;
            padding: 5px;
            font-size: 1.7rem;
            font-weight: bold;
            cursor: pointer;
            outline: none;

            &:hover {
                background-color: ${colorPrimary};
                color: ${colorSecondary};
            }
        }
    }
`;

// MODAL DELETE STYLES
export const StylesModalDelete = styled.section`
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

    &.hide {
        display: none;
    }

    &.show {
        display: flex;
    }

    div {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 440px;
        height: 250px;
        background-color: yellow;
        border: 3px solid ${colorSecondary};
        border-radius: 10px;
        overflow: hidden;
        padding: 40px 20px;

        i {
            font-size: 5rem;
            color: ${red};
        }

        p {
            font-size: 1.7rem;
            font-weight: bold;
        }

        .btn-wrapper {
            display: flex;
            width: 300px;
            height: 38px;
            margin: 0 auto;
            margin-top: 10px;
            border: 3px solid ${colorSecondary};
            border-radius: 20px;
            overflow: hidden;
            padding: 0;
            box-shadow: 0 5px 10px #000;

            button {
                outline: none;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 150px;
                height: 40px;
                background-color: ${colorPrimary};
                border: 3px solid ${colorPrimary};
                font-size: 1.5rem;
                text-decoration: none;
                margin-top: -5px;
                color: ${colorSecondary};
                font-weight: bold;
                cursor: pointer;

                &:hover {
                    background-color: ${colorSecondary};
                    border: 3px solid ${colorSecondary};
                    color: ${colorPrimary};
                }
            }
        }
    }
`;

// MODAL UPDATE STYLES
export const StylesModalUpdate = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0, 0.4);
    z-index: 999;

    &.hide {
        display: none;
    }

    &.show {
        display: flex;
    }

    div {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 450px;
        height: 350px;
        background-color: ${colorPrimary};
        border: 3px solid ${colorSecondary};
        border-radius: 10px;
        overflow: hidden;
        padding: 40px 20px;
        color: ${colorSecondary};
        
        .exit {
            position: absolute;
            top: -5%;
            right: 2%;
            text-decoration: none;
            font-size: 2.3rem;
            font-weight: bold;
            cursor: pointer;
            color: #fff;

            &:hover {
                transform: scale(1.2);
                color: ${colorSecondary};
            }
        }

        input {
            height: 35px;
            border: 3px solid ${colorSecondary};
            border-radius: 5px;
            margin-bottom: 10px;
            font-size: 1.8rem;
            font-weight: bold;
            text-align: center;
            color: ${colorSecondary};
            outline: none;

            &::placeholder {
                font-weight: bold;
            }
        }

        label {
            width: 100%;
            text-align: center;
            font-size: 2rem;
            font-weight: bold;

            select {
                width: 100%;
                border: 3px solid ${colorSecondary};
                font-size: 2rem;
                font-weight: bold;
                text-align-last:center;
                margin-top: 10px;
                color: ${colorSecondary};
                outline: none;
            }
        }

        button {
            width: 30%;
            min-width: 150px;
            margin: 0 auto;
            margin-top: 25px;
            border: 3px solid ${colorSecondary};
            border-radius: 20px;
            padding: 5px;
            font-size: 1.7rem;
            font-weight: bold;
            cursor: pointer;
            outline: none;

            &:hover {
                background-color: ${colorPrimary};
                color: ${colorSecondary};
            }
        }
    }
`;