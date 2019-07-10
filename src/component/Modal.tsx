import React, { FC } from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    background-color: rgba(0, 0, 0, 0.16);
    align-items: center;
    justify-content: center;

    .wrapper {
        width: 34vw;
        height: 81vh;
        background-color: #ffffff;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        h1 {
            margin: 0 0 0 0;
            font-family: 'Spoqa Han Sans';
            font-size: 2rem;
            font-weight: bold;
            color: #365dff;
        }

        div {
            height: 70vh;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            width: 34vw;
        }
    }
`

interface Props {
    setState : Function
}

const Modal : FC<Props> = ({setState}) => {
    return (
        <ModalWrapper onClick = {() => setState(null)}>
            <div className = "wrapper" onClick = {(e) => e.stopPropagation()}>
                <h1>이용내역</h1>
                <div>

                </div>
            </div>
        </ModalWrapper>
    );
};

export default Modal;