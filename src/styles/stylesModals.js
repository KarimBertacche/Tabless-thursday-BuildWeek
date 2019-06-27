import styled from 'styled-components';

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
        width: 400px;
        height: 300px;
        background-color: yellow;
        border: 3px solid red;
        border-radius: 10px;
        overflow: hidden;
        padding: 40px 20px;
        
        .exit {
            position: absolute;
            top: 2%;
            right: 2%;
            text-decoration: none;
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
            outline: none;

            &::placeholder {
                font-weight: bold;
            }
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