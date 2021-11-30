import * as s from './style';

const Signup = () => {
  return (
    <s.SignupWrapper>
      <s.SignupImageBox></s.SignupImageBox>
      <s.SignupSet>
        <s.SignupText>SIGN UP</s.SignupText>
        <s.SignupInput placeholder="아이디를 입력하세요"></s.SignupInput>
        <s.SignupInput placeholder="비밀번호를 입력하세요"></s.SignupInput>
        <s.SignupInput placeholder="Github ID를 입력하세요"></s.SignupInput>
        <s.SignupButton>회원가입 하기</s.SignupButton>
        <s.SignUpLogin>
          <s.SignupAccount>이미 계정이 있으신가요?</s.SignupAccount>
          <s.Login>로그인 하기</s.Login>
        </s.SignUpLogin>
      </s.SignupSet>
    </s.SignupWrapper>
  );
};

export default Signup;