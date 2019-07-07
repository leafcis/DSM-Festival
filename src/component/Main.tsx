import * as React from 'react';
import styled from 'styled-components';
import coinImage from '../assests/coin.png';

const MainWrapper = styled.div`
    height: calc(100vh - 5rem);
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const CoinImageWrapper = styled.div`
    height: 60vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    font-size: 8vh;
    font-family: ProductSans;
    color: #775f21;
    font-weight: 900;
`

const ListWrapper = styled.div`
    display: flex;
    height: 34.125vh;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`

interface Props {
    point: number,
    mobile: boolean,
    buttonList: React.ReactElement[],
}

const Main: React.FC<Props> = ({point, mobile, buttonList} : Props) => {
    console.log(coinImage)
    return (
        <MainWrapper>
            <CoinImageWrapper>
                <CoinImage mobile = {mobile}>
                    { point }
                </CoinImage>
            </CoinImageWrapper>
            <ListWrapper>
                {buttonList}
            </ListWrapper>
        </MainWrapper>
    );
};

export default Main;