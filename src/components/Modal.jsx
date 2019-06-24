import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { postUserTab } from '../store/actions/actions';

const StylesModal = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0, 0.8);
    z-index: 999;

    div {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 300px;
        background-color: yellow;
        border: 3px solid red;
        border-radius: 10px;
        overflow: hidden;
        padding: 40px 20px;

        span {
            position: absolute;
            top: 2%;
            right: 2%;
            font-size: 2rem;
            font-weight: bold;
            cursor: pointer;
        }

        input {
            height: 30px;
            border-radius: 5px;
            margin-bottom: 10px;
            font-size: 1.5rem;
            text-align: center;
        }

        button {
            width: 30%;
            min-width: 150px;
            margin: 0 auto;
            border: 3px solid red;
            border-radius: 20px;
            padding: 5px;
            font-size: 1.5rem;
            font-weight: bold;
            cursor: pointer;
        }
    }

`;


class Modal extends React.Component {
    state = {

    }

    postTabHandler = () => {
        const newTab = {

        }

        this.props.onPostTab(newTab);
    }

    render() {
        return ReactDOM.createPortal(
            <StylesModal>
                <div>
                    <span>X</span>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <button>Add Tab</button>
                </div>
            </StylesModal>,
            document.querySelector('#portal')
        );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPostTab: (tabInfo) => dispatch(postUserTab(tabInfo))
    }
}

export default connect(null, mapDispatchToProps)(Modal);