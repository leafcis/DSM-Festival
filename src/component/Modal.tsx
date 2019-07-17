import React, { FC } from 'react';
import styled from 'styled-components';
import InfoImage from '../assests/info.png'
import isMobile from '../utils/isMobile'

const ModalWrapper = styled.div`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    background-color: rgba(0, 0, 0, 0.16);
    align-items: center;
    justify-content: center;
    z-index: 999;

    .wrapper {
        box-sizing: border-box;
        padding-top: 5vh;
        padding-bottom: 9vh;
        ${props => props.mobile ? `width: 80vw;` : `width: 34vw;`}
        height: 81vh;
        background-color: #ffffff;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        h1 {
            margin: 0 0 0 0;
            font-family: 'Spoqa Han Sans';
            font-size: 2rem;
            font-weight: bold;
            color: #365dff;
        }

        .list--wrapper {
            padding-left: 3vw;
            padding-right: 3vw;
            height: 60vh;
            background-color: #ffffff;
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            ${props => props.mobile ? `width: 80vw;` : `width: 100%;`}
        }

        .info--image {
            background-image: url(${InfoImage});
            ${props => props.mobile ? `width: 80vw; height: 44vh;` : `width: 100%; height: 90%;`}
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
`

interface Props {
    mobile : boolean,
    setState : Function,
    state : string | null,
    list : React.ReactElement[]
}

const Modal : FC<Props> = ({mobile, setState, state, list}) => {
    return (
        <ModalWrapper mobile = {mobile} onClick = {() => setState(null)}>
            <div className = "wrapper" onClick = {(e) => e.stopPropagation()}>
                <h1>{state === 'rank' ? '순위' : state === 'history' ? '이용내역' : state === 'info' ? '공연정보' : null}</h1>
                {state !== null && state !== 'info' ?
                <div className = "list--wrapper">
                    { list }
                </div>
                :
                <div className = "list--wrapper">
                    <div className = "info--image" />
                </div>
                }
            </div>
        </ModalWrapper>
    );
};

export default Modal;