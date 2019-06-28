import styled from 'styled-components';
import {colorPrimary, colorSecondary, red} from './variables/colors';

// STYLES LOGIN PAGE
export const StylesLogin = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: 25%;
    height: 300px;
    margin: 10% auto 0;
    background-color: rgba(0, 0, 0, .6);
    border: 3px solid ${colorSecondary};
    border-radius: 10px;
    overflow: hidden;
    padding: 30px;
    box-shadow: 0 10px 20px #000;

    h2 {
        font-size: 4rem;
        margin: 0;
        margin-bottom: 20px;
        text-align: center;
        color: ${colorSecondary};
        text-shadow: 2px 2px 1px ${colorPrimary};
    }

    input {
        height: 35px;
        border: 3px solid ${colorSecondary};
        border-radius: 5px;
        margin-bottom: 20px;
        font-size: 1.5rem;
        text-align: center;
        outline: none;

        &:invalid {
            border: 3px solid ${red};
        }
    }

    button {
        width: 40%;
        margin: 0 auto;
        padding: 5px;
        border: 3px solid ${colorSecondary};
        border-radius: 20px;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
        outline: none;

        &:hover {
            border: 3px solid ${colorSecondary};
            background-color: ${colorSecondary};
            transform: translateY(-5px);
        }

        &:active {
            transform: translateY(-3px);
        }
    }

    figure {
        display: flex;
        justify-content: center;
        height: 200px;
        margin-top: -10px;

        img {
            width: 100%;
        }
    }

`;

// STYLES REGISTER PAGE
export const StylesSignUp = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: 25%;
    height: 350px;
    margin: 10% auto 0;
    background-color: rgba(0, 0, 0, .6);
    border: 3px solid ${colorSecondary};
    border-radius: 10px;
    overflow: hidden;
    padding: 30px;
    box-shadow: 0 10px 20px #000;

    h2 {
        font-size: 4rem;
        margin: 0;
        margin-bottom: 20px;
        text-align: center;
        color: ${colorSecondary};
        text-shadow: 2px 2px 1px ${colorPrimary};
    }

    input {
        height: 35px;
        border: 3px solid ${colorSecondary};
        border-radius: 5px;
        margin-bottom: 20px;
        font-size: 1.5rem;
        text-align: center;
        outline: none;

        &:invalid {
            border: 3px solid ${red};
        }
    }

    button {
        width: 40%;
        margin: 0 auto;
        padding: 5px;
        border: 3px solid ${colorSecondary};
        border-radius: 20px;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
        outline: none;

        &:hover {
            border: 3px solid ${colorSecondary};
            background-color: ${colorSecondary};
            transform: translateY(-5px);
        }

        &:active {
            transform: translateY(-3px);
        }
    }
`;