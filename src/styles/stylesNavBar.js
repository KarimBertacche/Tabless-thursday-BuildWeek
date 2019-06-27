import styled from 'styled-components';
import { colorPrimary, colorSecondary } from './variables/colors';

// STYLES NAV BAR 
export const StylesNavBar = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: 8.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colorPrimary};
    padding: 0 30px;
    box-shadow: 0 5px 10px #000;
    z-index: 200;
  
    .heading-secondary {
        text-decoration: none;
        color: ${colorSecondary};
        
        h2 {
            font-size: 4rem;
            margin: 0; 
            text-shadow: 1px 2px 1px #000;   
        }
    }

    .nav-links {
        text-decoration: none;
        font-size: 2rem;
        font-weight: bold;
        padding: 20px;
        color: ${colorSecondary};
        margin-right: 30px;

        &:last-child {
            margin-right: 0;
        }
    }

    .active {
        display: inline-block;
        background-color: ${colorSecondary};
        color: #fff;
        padding: 20px;
    }
`;

// STYLES SEARCH BAR 
export const StylesSearchBar = styled.div`
    position: fixed;
    top: 8.8vh;
    left: 50%;
    transform: ${props => (props.search? 'translate(-50%, 0)': 'translate(-50%, -100%)')};
    transform: translate(-50%, 0);
    display: flex;
    width: 350px;
    height: 50px;
    background-color: ${colorPrimary};
    border: 3px solid ${colorPrimary};
    border-top: none;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    z-index: 100;
    box-shadow: 0 5px 10px #000, 0 5px 10px #000;

    i {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        font-size: 3.5rem;
        cursor: pointer;
        /* color: ${colorSecondary}; */
        color: #fff;
    }

    input {
        width: 260px;
        height: 50px;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        outline: none;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: ${colorPrimary};
        border: 3px solid ${colorPrimary};
        outline: none;
        cursor: pointer;
    }
`;

export const StylesSearchButton = styled.section`
    position: fixed;
    top: 8.5%;
    left: 50%;
    transform: ${props => (props.search? 'translate(-50%, -100%)': 'translate(-50%, 0)')};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px; 
    background-color: ${colorPrimary};
    border: 3px solid ${colorPrimary};
    border-top: none;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    z-index: 100;
    transition: all 5s ease-in-out;
    box-shadow: 0 5px 10px #000, 0 5px 10px #000;

    i {
        font-size: 3rem;
        font-weight: bold;
        cursor: pointer;
        z-index: 2000;
        outline: none;
        color: ${colorSecondary};
        color: #fff;

        span {
            font-size: 2.5rem;
        }
    }
`;

// STYLES ASIDE BAR
export const StylesAsideBar = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: scroll;

    .aside-links {
        position: relative;
        width: 100%;
        list-style: none;
        border: 3px solid ${colorPrimary};
        font-size: 2rem;
        font-weight: bold;
        padding: 5px;
        text-align: center;
        cursor: pointer;
        transform: translateX(10%);
        transition: all .5s ease-in-out;
        margin-bottom: 5px;
        box-shadow: 0 5px 10px #000;
        text-decoration: none;
        color: ${colorSecondary};

        span {
            position: absolute;
            right: 2%;
            font-size: 2rem;

            &:hover {
                color: #fff;
            }
        }

        &:hover {
            background-color: ${colorPrimary};
            transform: translateX(0);
        }
    }

    .active {
        background-color: ${colorPrimary};
        transform: translateX(0);
    }

    .active span {
        display: none;
    }

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        background-color: #fff;
        border: 3px solid ${colorPrimary};
        margin: 0 auto;
        padding: 0;
        list-style: none;
        box-shadow: 0 5px 10px #000;
        cursor: pointer;
        z-index: 100;
        transition: all .2s ease-in-out;

        &:hover {
            background-color: ${colorPrimary};
            border: 3px solid ${colorSecondary};
            color: ${colorSecondary};
        }

        &:hover i {
            transform: scale(1.2);
        }

        i {
            font-size: 3rem;
        }
    }

    input {
        width: 100%;
        height: 40px;
        border: 5px solid ${colorPrimary};
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        font-size: 1.5rem;
        text-align: center;
        outline: none;
        color: ${colorSecondary};
        font-weight: bold;
        transition: all 1s ease-in-out;

        &.hide {
            transform: translateY(-100%);
        }

        &.show {
            display: translateY(0);
        }

        &::placeholder {
            color: ${colorSecondary};
        }
    }
`;