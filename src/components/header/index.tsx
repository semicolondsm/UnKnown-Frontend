import * as s from './style';

const Header = () => {
  return (
    <s.HeaderWrapper>
      <s.MenuWrapper>
        <s.SerchBox>
          <s.Search></s.Search>
        </s.SerchBox>
        <s.Post>게시물 작성</s.Post>
        <s.AuthTitle>로그인/회원가입</s.AuthTitle>
      </s.MenuWrapper>
    </s.HeaderWrapper>
  );
};

export default Header;
