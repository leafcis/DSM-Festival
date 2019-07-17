import React, {FC} from 'react';
import styled from 'styled-components'

const ListWrapper = styled.div`
    width: 100%;
    color: #000000;
    font-size: 1rem;
    display: flex;
    justify-content: space-between;

    div {
        font-family: 'Spoqa Han Sans';
    }

    & .name, & .point {
        font-size: 3vh;
        padding-top: 0.7vh;
        padding-bottom: 0.7vh;
        font-weight: 900;
    }

    div:nth-child(2) {
        color: #365dff;
    }

    & .point.negative {
        color: #ff5252;
    }
`

interface data {
    point: number,
    name? : string,
    booth_name? : string
}

interface Props {
    state : string,
    data? : data
    rank? : number
}

const ModalList : FC<Props> = ({state, data, rank}) => {
    return (
        <ListWrapper>
            {state === 'rank' && <>  <div className = "name">{rank}.{data.name}</div><div className = "point">{data.point}</div></>}
            {state === 'history' && <> <div className = "name">{data.booth_name}</div>{data.point >= 0 ? <div className = "point">{data.point}</div> : <div className = "point negative">{data.point}</div>}</>}
        </ListWrapper>
    );
};

export default ModalList;