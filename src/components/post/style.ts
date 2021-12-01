import styled from 'styled-components';
import { CopyBlock } from 'react-code-blocks';

export const CodeWrapper = styled.div`
  width: 1044px;
  padding: 25px;
  background-color: #f2f2f2;
  margin: 12px auto;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
`;
export const ProfileImage = styled.div`
  height: 46px;
  width: 46px;
  background-color: #dcdcdc;
  border-radius: 50%;
`;
export const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  > h3 {
    font-size: 13px;
    color: #131313;
  }
  > h4 {
    font-size: 13px;
    color: #838383;
  }
`;
export const Description = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #131313;
  margin: 10px 0;
`;
export const CodeBlockWrapper = styled(CopyBlock)`
  width: 500px;
`;
export const ShowFirstComment = styled.div`
  display: flex;
  margin-top: 22px;
`;
export const CommentImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #dcdcdc;
`;
export const CommentTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
`;
export const CommentUpperWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const CommenterName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #131313;
  margin-right: 5px;
`;
export const CommentDate = styled.p`
  font-size: 12px;
  color: #838383;
  font-weight: 600;
`;
export const CommentDescription = styled.p`
  color: #131313;
  font-size: 16px;
`;
