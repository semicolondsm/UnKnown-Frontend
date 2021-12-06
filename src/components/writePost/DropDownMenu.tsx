import { Languages } from "../../constance";
import * as S from "./style";
interface Props  {
  setIsDropDown:(props:boolean)=> void
}
const DropDownMenu:React.FC<Props> = (props)=>{
  const {setIsDropDown} = props;
  return(
    <>
      <S.SelectMenuWrapper onClick={() => setIsDropDown(false)}></S.SelectMenuWrapper>
      <S.SelectDropDownMenu onClick={(e)=>{e.preventDefault(); console.log(1)}}>
        {Languages.map((props,i)=>(<S.SelectMenuBox key={i}>{props}</S.SelectMenuBox>))}
      </S.SelectDropDownMenu>
    </>
  )
}

export default DropDownMenu;