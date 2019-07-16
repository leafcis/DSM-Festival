import React, {FC, ReactElement} from 'react';
import Modal from '../component/Modal'
import isMobile from '../utils/isMobile'

interface Props {
    state : string | null,
    setState : Function
}

const mobile : boolean = isMobile()

const ModalContainer : FC<Props> = ({state, setState}) => {
    let RenderComponent : ReactElement | null = null;
    if(state === 'rate') {
        RenderComponent = <Modal mobile = {mobile} setState = {setState} state = {state}/>
    }
    else if(state === 'history') {
        RenderComponent = <Modal mobile = {mobile} setState = {setState} state = {state}/>
    }
    return (
        <>
        { RenderComponent }
        </>
    );
};

export default ModalContainer;