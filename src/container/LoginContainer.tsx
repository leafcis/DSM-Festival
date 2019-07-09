import * as React from 'react'
import Login from '../component/Login'
import isMobile from '../utils/isMobile'

interface State {
    id : string,
    password : string
}

const mobile : boolean = isMobile()

const LoginContainer : React.FC = () => {
    const [account, setAccount] = React.useState<State>({
        id : "",
        password : ""
    });

    return ( 
        <Login mobile = {mobile} account = {account} onLogin = {setAccount}/>
    )
}

export default LoginContainer;