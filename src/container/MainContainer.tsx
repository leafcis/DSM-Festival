import * as React from 'react';
import Main from '../component/Main';
import SelectButton from '../component/SelectButton'
import isMobile from '../utils/isMobile'

interface Props {
    point: number;
}

interface ButtonSelect {
    kind: string,
    uri: string
}

const MainContainer : React.FC<Props> = ({point} : Props) => {
    const mobile : boolean = isMobile();
    const button: ButtonSelect[] = [{ kind : "개인순위", uri : "ranking" },{ kind : "이용내역", uri : "history" },{ kind : "주식", uri : "stock" }];
    const buttonList : React.ReactElement[] = button.map((data : ButtonSelect) => {
        return <SelectButton key = {data.kind} data = {data} mobile = {mobile} />
    })
    return (
        <>
          {
              <Main buttonList = {buttonList} mobile = {mobile} point = {100}></Main>
          }
        </>
    );
};

export default MainContainer;