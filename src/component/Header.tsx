import * as React from 'react';
import styled from 'styled-components';

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
    ${ props => props.mobile ? `font-size: 1rem; padding-left: 1rem; padding-right: 1.66925rem;` : `font-size: 1.75rem;     padding-left: 2.25rem;` }
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
    font-family: ProductSans;
    ${ props => props.mobile ? `font-size: 1rem; padding-right: 1rem;` : `font-size: 1.75rem; padding-right: 2.25rem; padding-left: 2.59275rem;` }
    color: #959595;
`

interface Props {
    mobile : boolean
}

const Header : React.FC<Props> = ({mobile} : Props) => {
    return (
        <HeaderWrapper>
            <LogoWrppaer mobile = {mobile}>
                { mobile ? 'DSM' : 'DSM Festival' }
            </LogoWrppaer>
            <StudentWrppaer mobile = {mobile}>
                3311 윤석민
            </StudentWrppaer>
            <LoginWrapper mobile = {mobile}>
                LOGOUT
            </LoginWrapper>
        </HeaderWrapper>
    );
};

export default Header;