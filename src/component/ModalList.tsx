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
        font-size: 1.5rem;
        height: 3rem;
        font-weight: 900;
    }

    div:nth-child(2) {
        color: #365dff;
    }
`

interface data {
    point: number,
    name : string
}

interface Props {
    state : string,
    data? : data
    rank? : number
}

const ModalList : FC<Props> = ({state, data, rank}) => {
    console.log(data)
    return (
        <ListWrapper>
            <div className = "name">{state === 'rank' && rank}.{data.name}</div>
            {state === 'rank' && <div className = "point">{data.point}</div>}
        </ListWrapper>
    );
};

export default ModalList;