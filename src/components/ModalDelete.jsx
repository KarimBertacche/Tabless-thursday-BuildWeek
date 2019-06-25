import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { deleteTab, getUserTabs } from '../store/actions/actions';

const StylesModalDelete = styled.section`
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
        align-items: center;
        width: 400px;
        height: 200px;
        background-color: yellow;
        border: 3px solid red;
        border-radius: 10px;
        overflow: hidden;
        padding: 40px 20px;

        p {
            font-size: 1.7rem;
        }

        .btn-wrapper {
            display: flex;
            height: 38px;
            border: 3px solid red;
            border-radius: 20px;
            overflow: hidden;
            cursor: pointer;
            padding: 0;

            .del-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 150px;
                height: 40px;
                background-color: red;
                font-size: 1.5rem;
                text-decoration: none;
                margin-top: -5px;
                color: #000;

                &:last-child {
                    border-left: 3px solid red;
                }
            }

            button {
                cursor: pointer;
                outline: none;
            }
        }
    }
`;

const ModalDelete = (props) => {

    const deleteCardHandler = (event) => {
        event.preventDefault();
        props.onDeleteTab(props.tabId);
        props.onRefreshTabs();
    }

    return ReactDOM.createPortal(
        <StylesModalDelete>
            <div>
                <p>Are you sure that you want to delete the tab?</p>
                <main className="btn-wrapper">
                    <Link to="/home" className="del-btn">No</Link>
                    <button onClick={deleteCardHandler} className="del-btn">Yes</button>
                </main>
            </div>
        </StylesModalDelete>,
        document.querySelector('#deletePortal')
    );
}

const mapStateToProps = state => {
    return {
        deleteMessage: state.deleteMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteTab: (id) => dispatch(deleteTab(id)),
        onRefreshTabs: () => dispatch(getUserTabs())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDelete);