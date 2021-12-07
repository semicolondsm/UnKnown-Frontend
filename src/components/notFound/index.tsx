import * as S from "./style";

const NotFound = ()=>{
  return(
    <S.NotFoundWrapper>
      <S.NotFoundMainWrapper>
        <S.WarnningIconBox></S.WarnningIconBox>
        <p>검색 결과가 없습니다</p>
      </S.NotFoundMainWrapper>
      <S.WarnningDescription>{"다른 검색어(유사어)로 검색해 보시기 바랍니다.\n단어의 철자가 정확한지 확인해 주시기 바랍니다.\n일반적으로 많이 사용하는 검색어로 다시 검색해 주시기 바랍니다. "}</S.WarnningDescription>
    </S.NotFoundWrapper>
  )
}

export default NotFound;