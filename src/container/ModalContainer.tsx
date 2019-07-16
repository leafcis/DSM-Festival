import React, {FC, ReactElement, useEffect} from 'react';
import Modal from '../component/Modal'
import isMobile from '../utils/isMobile'
import axios from 'axios'

interface Props {
    state : string | null,
    setState : Function
}

const mobile : boolean = isMobile()

const ModalContainer : FC<Props> = ({state, setState}) => {
    // useEffect(() => {
    //     axios.
    // }, [state])
    let RenderComponent : ReactElement | null = null;
    if(state === 'ranking') {
        RenderComponent = <Modal mobile = {mobile} setState = {setState} state = {state}/>
    }
    else if(state === 'history') {
        RenderComponent = <Modal mobile = {mobile} setState = {setState} state = {state}/>
    }
    else if(state === 'rate') {
        RenderComponent = <Modal mobile = {mobile} setState = {setState} state = {state}/>
    }
    return (
        <>
        { RenderComponent }
        </>
    );
};

export default ModalContainer;