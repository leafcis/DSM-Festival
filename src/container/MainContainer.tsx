import * as React from 'react';
import Main from '../component/Main';
import SelectButton from '../component/SelectButton'
import isMobile from '../utils/isMobile'
import ModalContainer from './ModalContainer'
import { useStore, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'

interface ButtonSelect {
    kind: string,
    uri: string
}

const MainContainer : React.FC = () => {
    const store = useStore().getState()
    const [state, setState] = React.useState(null)
    const mobile : boolean = isMobile();
    const button: ButtonSelect[] = [{ kind : "평가", uri : "rate" },{ kind : "이용내역", uri : "history" },{ kind : "주식", uri : "stock" }];
    const buttonList : React.ReactElement[] = button.map((data : ButtonSelect) => {
        return <SelectButton key = {data.kind} data = {data} mobile = {mobile} setState = {setState}  />
    })
    return (
        <>
          {

              <>
                <ModalContainer state = {state} setState = {setState}/>
                <Main buttonList = {buttonList} mobile = {mobile} point = {100}/>
              </>

          }
        </>
    );
};

export default MainContainer;