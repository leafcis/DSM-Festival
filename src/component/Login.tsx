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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25vh;
`

const Button = styled.button`
    appearance: none;
    border: none;
    ${props => props.mobile ? `width: 80vw;` : `width: 24vw;`}
    border-radius: 0.5rem;
    height: 6vh;
    font-size: 2.22vh;
    font-family: 'Spoqa Han Sans';
    background-color: #365dff;
    color: #ffffff;
`

const Input = styled.input`
    border: solid 2px #959595;
    height: 6vh;
    box-sizing: border-box;
    font-size: 2.22vh;
    font-family: 'Spoqa Han Sans';
    border-radius: 0.5rem;

    ${props => props.mobile ? `width: 80vw;` : `width: 24vw;`}

    padding-left: 1rem;
    padding-right: 1rem;

    &:focus {
        border: solid 2px #365dff;
    }
`

interface State {
    id : string,
    password : string
}

interface Props {
    mobile : boolean,
    account : State,
    onLogin : Function
}

const Login : FC<Props> = ({mobile, account, onLogin}) => {
    console.log(account)
    return (
        <LoginWrapper>
            <InputWrapper>
                <Input mobile = {mobile} placeholder = "ID" value = {account.id} onChange = {(e) => onLogin({
                    ...account, id : e.target.value
                })}/>
                <Input type = "password" mobile = {mobile} placeholder = "Password" value = {account.password} onChange = {(e) => onLogin({
                    ...account, password : e.target.value
                })}/>
                <Button mobile = {mobile}>
                    DMS 계정으로 로그인
                </Button>
            </InputWrapper>
        </LoginWrapper>
    );
};

export default Login;