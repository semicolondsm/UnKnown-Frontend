import Header from '../header';
import Post from '../post';
import * as S from './style';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <>
      <Header></Header>
      <S.MyPageWrapper>
        <S.MyPageText>마이페이지</S.MyPageText>
        <S.MyPageLine></S.MyPageLine>
        <S.ProfileBox>
          <S.ProfileImage></S.ProfileImage>
          <S.NameId>
            <S.ProfileName>hyeyeonchurros</S.ProfileName>
            <S.ProfileBox>
              <S.ProfileId>qwer1234</S.ProfileId>
              <S.ChangePassword>비밀번호 변경</S.ChangePassword>
            </S.ProfileBox>
          </S.NameId>
        </S.ProfileBox>
        <S.MyPostText>내 게시물</S.MyPostText>
        <Post></Post>
        <Post></Post>
      </S.MyPageWrapper>
    </>
  );
};

export default MainPage;
