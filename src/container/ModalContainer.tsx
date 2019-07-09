import React, {FC, ReactElement} from 'react';
import Modal from '../component/Modal'

interface Props {
    state : string | null,
    setState : Function
}

const ModalContainer : FC<Props> = ({state, setState}) => {
    let RenderComponent : ReactElement | null = null;
    if(state === 'rate') {
        RenderComponent = <Modal setState = {setState}/>
    }
    else if(state === 'history') {
        RenderComponent = <Modal setState = {setState}/>
    }
    return (
        <>
        { RenderComponent }
        </>
    );
};

export default ModalContainer;