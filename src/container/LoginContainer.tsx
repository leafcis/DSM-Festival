import * as React from 'react'
import Login from '../component/Login'

interface State {
    id : string,
    password : string
}

const LoginContainer : React.FC = () => {
    const [account, setAccount] = React.useState<State>({
        id : "",
        password : ""
    });

    return ( 
        <Login account = {account} onLogin = {setAccount}/>
    )
}

export default LoginContainer;