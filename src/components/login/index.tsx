import * as s from './style';

const Login = () => {
  return (
    <s.LoginWrapper>
      <s.LoginWhiteBox>
        <s.LoginSet>
          <s.LoginText>LOGIN</s.LoginText>
          <s.LoginID placeholder='아이디를 입력하세요'></s.LoginID>
          <s.LoginPassword placeholder='비밀번호를 입력하세요'></s.LoginPassword>
          <s.LoginButton>로그인</s.LoginButton>
          <s.LoginSignUp>
            <s.LoginAccount>계정이 없으신가요?</s.LoginAccount>

            <s.SignUp>회원가입 하기</s.SignUp>
          </s.LoginSignUp>
        </s.LoginSet>
      </s.LoginWhiteBox>
      <s.LoginBlackBox></s.LoginBlackBox>
    </s.LoginWrapper>
  );
};

export default Login;
