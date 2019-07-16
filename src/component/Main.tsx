import * as React from 'react';
import styled from 'styled-components';
import coinImage from '../assests/coin.png';
import crownImage from '../assests/crown.png'

const MainWrapper = styled.div`
    height: calc(100vh - 5rem);
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

const CoinImageWrapper = styled.div`
    height: 75vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const CoinImage = styled.div`
    ${ props => props.mobile ? 
        `
            height: 25vh;
            width: 25vh;
            font-size: 8vh;
        ` : 
        `
            height: 37vh;
            width: 37vh;
            font-size: 12vh;
        `
    }
    background-image: url(${coinImage});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ProductSans;
    color: #775f21;
    font-weight: 900;
`

const ListWrapper = styled.div`
    display: flex;
    height: 34.125vh;
    padding-bottom: 4.4vw;
    justify-content: space-between;
    align-items: flex-end;
    ${props => props.mobile ? `width: calc(100% - 8.8vw);` : `width: 50%;`}
`

const RankingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #775f21;
    font-family: 'Spoqa Han Sans';
    font-weight: 900;
    padding-top: 0.7rem;
    box-sizing: border-box;
    ${props => props.mobile ? `font-size: 1.5rem; width: 13vh; height: 13vh;` : `width: 20vh; height: 20vh; font-size: 3rem;`}
    background-image: url(${crownImage});
    background-size: cover;
    position: absolute;
    ${props => props.mobile ? `right: 1rem;` : `right : 25%;`}
    top: 1rem;
`

interface Props {
    point: string,
    mobile: boolean,
    buttonList: React.ReactElement[],
}

const Main: React.FC<Props> = ({point, mobile, buttonList} : Props) => {
    return (
        <MainWrapper>
            {/*<RankingWrapper mobile = {mobile}>
                5
    </RankingWrapper>*/}
            <CoinImageWrapper>
                <CoinImage mobile = {mobile}>
                        { point }
                </CoinImage>
        </CoinImageWrapper>
        <ListWrapper mobile = {mobile}>
            {buttonList}
        </ListWrapper>
        </MainWrapper>
    );
};

export default Main;