import * as React from 'react'
import { useDispatch } from 'react-redux'
import Login from '../component/Login'
import isMobile from '../utils/isMobile'
import axios from 'axios'
import urlAddress from '../utils/urlAddress'
import { ISLOGIN } from '../actions'
import { RouteComponentProps } from 'react-router-dom'
import { setCookie } from '../utils/cookie';

interface State {
    id : string,
    password : string
}

const mobile : boolean = isMobile()

const LoginContainer : React.FC<RouteComponentProps> = ({history}) => {
    const dispatch = useDispatch();
    const LoginHandle = async (id, pw) => {
        try {
            const result = await axios.post(urlAddress + 'login', {
                id : id,
                pw : pw,
            })
            console.log(result);
            dispatch(ISLOGIN(true))
            alert('로그인에 성공하셨습니다!')
            setCookie('token', result.data.accessToken)
            history.push('/')
        }
        catch (err) {
            alert('아이디 또는 비밀번호가 틀렸습니다.')
        }
    }
    const [account, setAccount] = React.useState<State>({
        id : "",
        password : ""
    });

    return ( 
        <Login mobile = {mobile} account = {account} onLogin = {setAccount} onLoginHandle = {() => {LoginHandle(account.id, account.password)}}/>
    )
}

export default LoginContainer;