import * as React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    width: 100vw;
    height: 5rem;
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.16);\
    display: flex;
    justify-content: space-between;
    align-items: center;
    `

const LogoWrppaer = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;

`

const StudentWrppaer = styled.div`
    width: 33vw;
    height: 3rem;
    background-color: rgba(36,93,255, 0.16);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #365dff;
    font-family: 'Spoqa Han Sans';
    font-size: 2.1875vh;
    font-weight: bold;
`

const LoginWrapper = styled.div`

`

const Header = () => {
    return (
        <HeaderWrapper>
            <LogoWrppaer>
                DSM
            </LogoWrppaer>
            <StudentWrppaer>
                3311 윤석민
            </StudentWrppaer>
            <LoginWrapper>
                LOGOUT
            </LoginWrapper>
        </HeaderWrapper>
    );
};

export default Header;