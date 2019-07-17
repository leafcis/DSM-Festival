import React, {FC, ReactElement, useEffect, useState} from 'react';
import Modal from '../component/Modal'
import isMobile from '../utils/isMobile'
import axios from 'axios'
import urlAddress from '../utils/urlAddress';
import { getCookie } from '../utils/cookie';
import ModalList from '../component/ModalList';

interface Props {
    state : string | null,
    setState : Function
}

const mobile : boolean = isMobile()

const ModalContainer : FC<Props> = ({state, setState}) => {
    let rank = 1;
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    useEffect(() => {
        if(state !== null && state !== 'info') {
            const check = async () => {
                try {
                    const result = await axios.get(urlAddress + state, {
                        headers : {
                            Authorization: getCookie('token')
                        }
                    })
                    const key = Object.keys(result.data)
                    setList(result.data[key[0]].map((data) => {
                        return <ModalList state = {state} data = {data} rank = {rank++}/>
                    }))
                    setLoading(true)
                }
                catch (err) {
                    console.log(err)
                }
            }
            check()
        }
        else if(state === 'info'){
            <ModalList state = {state}/>
        }
    }, [state])
    return (
        <>
            { state !== null && loading === true && <Modal mobile = {mobile} setState = {setState} state = {state} list = {list}/>}
        </>
    );
};

export default ModalContainer;