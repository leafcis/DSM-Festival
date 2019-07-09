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

    div {
        width: 34vw;
        height: 81vh;
        background-color: #ffffff;
        border-radius: 0.5rem;
    }
`

interface Props {
    setState : Function
}

const Modal : FC<Props> = ({setState}) => {
    return (
        <ModalWrapper onClick = {() => setState(null)}>
            <div onClick = {(e) => e.stopPropagation()}>

            </div>
        </ModalWrapper>
    );
};

export default Modal;