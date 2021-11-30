import styled from 'styled-components';
import arrow from '../../assets/login/arrow.svg';
import illustration from '../../assets/login/Login_Illustration.svg';

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const LoginWhiteBox = styled.div`
  width: 58%;
  height: 100%;
  min-width: 492.8px;
  display: flex;
  align-items: center;
`;

export const LoginBlackBox = styled.div`
  width: 42%;
  height: 100%;
  background-color: black;
  background-image: url(${illustration});
  background-size: 569.6px 436.905px;
  background-position: right bottom;
  background-repeat: no-repeat;
`;

export const LoginSet = styled.div`
  width: 492.8px;
  margin: 0 auto;
`;

export const LoginText = styled.p`
  font-size: 47.6px;
  font-family: 'Lucida Console';
  text-align: center;
`;

export const LoginID = styled.input`
  padding: 0 10px;
  margin-top: 76px;
  width: 100%;
  height: 42px;
  border-radius: 1px;
  border-color: black;
`;

export const LoginPassword = styled.input`
  padding: 0 10px;
  margin-top: 24px;
  width: 100%;
  height: 42px;
  border-radius: 1px;
  border-color: black;
`;

export const LoginButton = styled.button`
  margin-top: 64px;
  width: 100%;
  height: 42px;
  background-color: black;
  border: 0;
  outline: 0;
  cursor: pointer;
  font-family: 'Noto Sans CJK KR';
  font-size: 16px;
  color: white;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: 19.2px 16.8px;
  background-position: 97% 50%;
  transition: all 0.5s;
  &:hover {
    background-color: white;
    border-radius: 2px;
    border: 2px solid black;
    color: black;
    
  }
`;

export const LoginSignUp = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
  justify-content: center;
`;

export const LoginAccount = styled.p`
  font-family: 'Noto Sans CJK KR';
  font-size: 14px;
  color: #707070;
`;

export const SignUp = styled.p`
  margin-left: 4px;
  font-family: 'Noto Sans CJK KR';
  font-size: 14px;
  text-decoration: underline;
  font-weight: 500;
  cursor: pointer;
`;
