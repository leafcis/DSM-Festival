import * as React from 'react';
import styled from 'styled-components';
import listImage from '../assests/list.png'

interface ButtonSelect {
    kind: string,
    uri: string
}

interface Props {
    data : ButtonSelect
}

const SelectButtonWrapper = styled.div`
    height: 23.125vh;
    width: 27vw;
    display: flex;
    background-color: rgba(36, 93, 255, 0.15);
    border-radius: 0.5rem;
    box-sizing: border-box;
    padding-top: 6.9375vh;
    padding-bottom: 6.9375vh;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ImageWrapper = styled.div`
    background-image: url(${listImage});
    width: 3.7vh;
    height: 3.7vh;
    background-size: cover;
`

const ContentWrapper = styled.div`
    color: #365dff;
    font-size: 2.3125vh;
    font-weight: bold;
    font-family: 'Spoqa Han Sans';
`

const SelectButton : React.FC<Props> = ({data} : Props) => {
    return (
        <SelectButtonWrapper>
            <ImageWrapper />
            <ContentWrapper>
                {data.kind}
            </ContentWrapper>
        </SelectButtonWrapper>
    );
};

export default SelectButton;