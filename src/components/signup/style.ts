import styled from 'styled-components';

export const SignupWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: black;
`;

export const SignupImageBox = styled.div`
  width: 589.4px;
  height: 100%;
  min-width: 589.4px;
  background-color: black;
`;

export const SignupSet = styled.div`
  width: 493.6px;
  background-color: black;
`;

export const SignupText = styled.p`
  color: white;
  font-size: 47.6px;
  font-family: 'Lucida Console';
  text-align: left;
  margin-bottom: 44.8px;
`;

export const SignupInput = styled.input`
  padding: 0 10px;
  width: 100%;
  height: 42px;
  border: 0;
  outline: 0;
  margin: 8.4px 0;
  border-radius: 0;
`;

export const SignupButton = styled.button`
  width: 100%;
  height: 42px;
  border-color: white;
  background-color: black;
  color: white;
  font-family: 'Noto Sans CJK KR';
  font-size: 16px;
  cursor: pointer;
  margin-top: 44.8px;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;

export const SignUpLogin = styled.div`
  width: 100%;
  display: flex;
  margin-top: 12px;
  justify-content: center;
`;

export const SignupAccount = styled.p`
  font-family: 'Noto Sans CJK KR';
  font-size: 14px;
  color: #707070;
`;

export const Login = styled.p`
  margin-left: 4px;
  font-family: 'Noto Sans CJK KR';
  font-size: 14px;
  text-decoration: underline;
  font-weight: 500;
  cursor: pointer;
  color: white;
`;
