import styled from 'styled-components';
import {colorPrimary} from './variables/colors';

// STYLES LOGIN PAGE
export const StylesLogin = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    width: 25%;
    height: 300px;
    margin: 10% auto 0;
    background-color: rgba(0, 0, 0, .35);
    border: 3px solid #000;
    border-radius: 10px;
    overflow: hidden;
    padding: 30px;
    box-shadow: 0 10px 20px #000;

    h2 {
        font-size: 3rem;
        margin: 0;
        margin-bottom: 20px;
        text-align: center;
    }

    input {
        height: 35px;
        border: 3px solid ${colorPrimary};
        border-radius: 5px;
        margin-bottom: 20px;
        font-size: 1.5rem;
        text-align: center;
        outline: none;
    }

    button {
        width: 40%;
        height: 35px;
        margin: 0 auto;
        padding: 5px;
        border: 3px solid ${colorPrimary};
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.2rem;
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
    background-color: rgba(0, 0, 0, .35);
    border: 3px solid #000;
    border-radius: 10px;
    overflow: hidden;
    padding: 30px;
    box-shadow: 0 10px 20px #000;

    h2 {
        font-size: 3rem;
        margin: 0;
        margin-bottom: 20px;
        text-align: center;
    }

    input {
        height: 35px;
        border: 3px solid ${colorPrimary};
        border-radius: 5px;
        margin-bottom: 20px;
        font-size: 1.5rem;
        text-align: center;
        outline: none;
    }

    button {
        width: 40%;
        margin: 0 auto;
        padding: 5px;
        border: 3px solid ${colorPrimary};
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.2rem;
    }
`;