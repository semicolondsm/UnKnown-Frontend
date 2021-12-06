import React, { useEffect, useRef } from "react";
import * as S from "./style";

interface Props {
  setState:(paylod:string)=>void
  state:string,
  setIsInput:(paylode:boolean)=>void
}

const SelectText:React.FC<Props>= (props)=>{
  useEffect(()=>{
    area.current?.focus()
  },[]);
  const {state,setIsInput,setState}= props;
  const area = useRef<HTMLTextAreaElement>(null);
  return (
    <S.SelectTextArea value={state} onChange={(e)=>setState(e.currentTarget.value)} onBlur={()=>setIsInput(false)} ref={area}>
    </S.SelectTextArea>
  )
}

export default SelectText;