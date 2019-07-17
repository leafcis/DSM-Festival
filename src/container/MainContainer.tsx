import * as React from 'react';
import Main from '../component/Main';
import SelectButton from '../component/SelectButton'
import isMobile from '../utils/isMobile'
import ModalContainer from './ModalContainer'
import { useStore, useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { getCookie, setCookie, removeCookie } from '../utils/cookie'
import axios from 'axios'
import urlAddress from '../utils/urlAddress'
import { ISLOGIN } from '../actions/index'

interface ButtonSelect {
    kind: string,
    uri: string
}

const MainContainer : React.FC<RouteComponentProps> = ({history}) => {
    const dispatch = useDispatch()
    const store = useStore().getState()
    const [state, setState] = React.useState(null)
    const [point, setPoint] = React.useState("?")
    React.useEffect(() => {
        const check = async () => {
                try {
                    const result = await axios.get(urlAddress + 'info', {
                        headers : {
                            Authorization: `Bearer ${getCookie('token')}`   
                        }
                    })
                    setPoint(result.data.point);
                    dispatch(ISLOGIN(true))
                }
                catch (error) {
                    if(getCookie('token') === null && store.isLogin)
                        alert('토큰이 만료되었습니다.')
                    removeCookie('token')
                    history.push('/login')
                }
        }
        check()
    }, [])
    const mobile : boolean = isMobile();
    const button: ButtonSelect[] = [{ kind : "개인순위", uri : "rank" },{ kind : "이용내역", uri : "history" },{ kind : "공연정보", uri : "info" }];
    const buttonList : React.ReactElement[] = button.map((data : ButtonSelect) => {
        return <SelectButton key = {data.kind} data = {data} mobile = {mobile} setState = {setState}  />
    })
    return (
              <> 
                { store.isLogin &&
                    <>
                        <ModalContainer state = {state} setState = {setState}/>
                        <Main buttonList = {buttonList} mobile = {mobile} point = {point}/>
                    </>
                }
              </>
    );
};

export default MainContainer;