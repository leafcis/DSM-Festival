import * as React from 'react';
import styled from 'styled-components';
import listImage from '../assests/list.png'

interface ButtonSelect {
    kind: string,
    uri: string
}

interface Props {
    data : ButtonSelect,
    mobile : boolean,
    setState : Function
}

const SelectButtonWrapper = styled.div`
    height: 23.125vh;
    width: 27vw;
    display: flex;
    background-color: rgba(36, 93, 255, 0.15);
    border-radius: 0.5rem;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    ${props => props.mobile ? `height: 23.125vh; width: 27vw; padding-top: 6.9375vh; padding-bottom: 6.9375vh;` : `height: 15rem; width: 15rem; padding-top: 6.38vh; padding-bottom: 6.38vh;`}
    cursor: pointer;
`

const ImageWrapper = styled.div`
    background-image: url(${listImage});
    ${props => props.mobile ? `width: 3.7vh; height: 3.7vh;` : `height: 6.66vh; width: 6.66vh;`}
    background-size: cover;
`

const ContentWrapper = styled.div`
    color: #365dff;
    ${props => props.mobile ? `font-size: 2.3125vh;` : `font-size: 3vh;`}
    font-weight: bold;
    font-family: 'Spoqa Han Sans';
`

const SelectButton : React.FC<Props> = ({data, mobile, setState} : Props) => {
    return (
        <SelectButtonWrapper mobile = {mobile} onClick = {() => setState(data.uri)}>
            <ImageWrapper mobile = {mobile}/>
            <ContentWrapper mobile = {mobile}>
                {data.kind}
            </ContentWrapper>
        </SelectButtonWrapper>
    );
};

export default SelectButton;