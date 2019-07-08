import React, { FC } from 'react';
import styled from 'styled-components'

const LoginWrapper = styled.div`
    height: calc(100vh - 5rem);
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InputWrapper = styled.div`
    height: 50vh;
    width: 50vw;
    background-color: rgba(36, 93, 255, 0.16);
    border-radius: 5rem;
`

const Input = styled.input`
    width: 30vw;
    height: 5rem;
`

interface State {
    id : string,
    password : string
}

interface Props {
    account : State,
    onLogin : Function
}

const Login : FC<Props> = ({account, onLogin}) => {
    console.log(account)
    return (
        <LoginWrapper>
            <InputWrapper>
                <Input value = {account.id} onChange = {(e) => onLogin({
                    ...account, id : e.target.value
                })}/>
                <Input value = {account.password} onChange = {(e) => onLogin({
                    ...account, password : e.target.value
                })}/>
            </InputWrapper>
        </LoginWrapper>
    );
};

export default Login;