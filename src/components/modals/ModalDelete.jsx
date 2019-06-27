import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import { StylesModalDelete } from '../../styles/stylesModals';
import { deleteTab, getUserTabs } from '../../store/actions/actions';

const ModalDelete = (props) => {
    
    const delCompleteHandler = () => {
        let tabId = localStorage.getItem('tabID');
        props.onDeleteTab(tabId);
        localStorage.removeItem('tabID');
        props.hideModalDelete()
        props.onRefreshTabs();
    }

    return ReactDOM.createPortal(
        <StylesModalDelete className={props.toggle ? 'show' : 'hide'}>
            <div>
                <p>Are you sure that you want to delete the tab?</p>
                <main className="btn-wrapper">
                    <button 
                        className="del-btn"
                        onClick={props.toggleModalDelete}
                        >No</button>
                    <button className="del-btn" onClick={delCompleteHandler}>Yes</button>
                </main>
            </div>
        </StylesModalDelete>,
        document.querySelector('#deletePortal')
    );
}

// const mapStateToProps = state => {
//     return {
//         tabs: state.tabs,
//         deleteMessage: state.deleteMessage
//     }
// }

const mapDispatchToProps = dispatch => {
    return {
        onDeleteTab: (id) => dispatch(deleteTab(id)),
        onRefreshTabs: () => dispatch(getUserTabs())
    }
}

export default connect(null, mapDispatchToProps)(ModalDelete);