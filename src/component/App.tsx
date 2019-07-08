import * as React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {Route} from 'react-router-dom'

import LoginContainer from '../container/LoginContainer'
import MainContainer from '../container/MainContainer'
import Header from './Header'
import isMobile from '../utils/isMobile'

import ProductSans from '../../src/fonts/ProductSans.ttf';

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

const GlobalStyled = createGlobalStyle`
    body {
        margin: 0 0 0 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        display: flex;
    }

    @font-face {
        font-family: ProductSans;
        src: url(${ProductSans});
    }
`

const App = () => (
    <>
        <GlobalStyled />
        <ContentWrapper>
            <Header mobile = {isMobile()}/>
            <Route exact path="/" component={MainContainer}/>
            <Route exact path="/login" component={LoginContainer}/>
        </ContentWrapper>
    </>
)

export default App;
