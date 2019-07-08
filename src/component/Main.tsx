import * as React from 'react';
import styled from 'styled-components';
import coinImage from '../assests/coin.png';

const MainWrapper = styled.div`
    height: calc(100vh - 5rem);
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const CoinImageWrapper = styled.div`
    height: 60vh;
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
        ` : 
        `
            height: 37vh;
            width: 37vh;   
        `
    }
    background-image: url(${coinImage});
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4.16rem;
    font-family: ProductSans;
    color: #775f21;
    font-weight: 900;
`

const ListWrapper = styled.div`
    display: flex;
    height: 34.125vh;
    justify-content: space-around;
    align-items: center;
    ${props => props.mobile ? `width: 100%;` : `width: 70%;`}
`

const RankingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content;
    color: #365dff;
    font-family: 'Spoqa Han Sans';
    font-weight: 900;
    font-size: 3rem;
`

interface Props {
    point: number,
    mobile: boolean,
    buttonList: React.ReactElement[],
}

const Main: React.FC<Props> = ({point, mobile, buttonList} : Props) => {
    return (
        <MainWrapper>
            <CoinImageWrapper>
                <CoinImage mobile = {mobile}>
                    { point }
                </CoinImage>
                <RankingWrapper>
                    Ranking : 5
                </RankingWrapper>
            </CoinImageWrapper>
            <ListWrapper mobile = {mobile}>
                {buttonList}
            </ListWrapper>
        </MainWrapper>
    );
};

export default Main;