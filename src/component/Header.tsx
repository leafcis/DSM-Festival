import * as React from 'react';
import styled from 'styled-components';
import { useDispatch, useStore } from 'react-redux'
import { ISLOGIN } from '../actions'
import { getCookie, removeCookie } from '../utils/cookie';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import urlAddress from '../utils/urlAddress'
import axios from 'axios'

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 5rem;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.16);
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoWrppaer = styled.div`
    font-family: ProductSans;
    color: #365dff;
    width: 10rem;
    ${ props => props.mobile ? `font-size: 1rem; padding-left: 1rem;` : `font-size: 1.75rem;  padding-left: 2.25rem;` }
`

const StudentWrppaer = styled.div`
    background-color: rgba(36,93,255, 0.16);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #365dff;
    font-family: 'Spoqa Han Sans';
    ${ props => props.mobile ? `font-size: 1rem; width: 33vw; height: 3rem;` : `font-size: 1.75rem; width: 10rem; height: 4rem;` }
    font-weight: bold;
`

const LoginWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    font-family: ProductSans;
    width: 10rem;
    ${ props => props.mobile ? `font-size: 1rem; padding-right: 1rem;` : `font-size: 1.75rem; padding-right: 2.25rem;` }
    color: #959595;
`

interface store {
    isLogin : boolean
}

interface Props {
    mobile : boolean,
    store : store,
}

interface state {
    name : string,
    number : string
}

const Header : React.FC<RouteComponentProps & Props> = ({history, mobile, store}) => {
    const [account, setAccount] = React.useState<state>({name : '', number : ''})
    const dispatch = useDispatch()
    React.useEffect(() => {
        try{
        const check = async () => {
                    const result = await axios.get(urlAddress + 'info', {
                        headers : {
                            Authorization: `Bearer ${getCookie('token')}`   
                        }
                    })
                    setAccount({...account, name : result.data.name, number : result.data.number});
                    dispatch(ISLOGIN(true))
        }
        check()
    }
    catch(err) {

    }
    }, [store])
    return (
        <HeaderWrapper>
            <LogoWrppaer mobile = {mobile}>
                { mobile ? 'DSM' : 'DSM Festival' }
            </LogoWrppaer>
            { store ?
                <StudentWrppaer mobile = {mobile}>
                    {account.number} {account.name.slice(0, 3)} 
                </StudentWrppaer>
                :
                null
            }
            <LoginWrapper mobile = {mobile} onClick = {() => { removeCookie('token'); dispatch(ISLOGIN(false)); history.push('/login'); setAccount({...account, name : '', number : ''})}}>
                {   store ?
                    'Logout' : 'Login'
                }
            </LoginWrapper>
        </HeaderWrapper>
    );
};

export default withRouter(Header);