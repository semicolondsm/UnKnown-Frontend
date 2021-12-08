import { googlecode } from 'react-code-blocks';
import * as s from './style';

const Post = () => {
  return (

      <s.CodeWrapper>
        <s.ProfileBox>
          <s.ProfileImage></s.ProfileImage>
          <s.ProfileName>
            <h3>사용자</h3>
            <h4>2021년 11월 18일 16:00</h4>
          </s.ProfileName>
        </s.ProfileBox>
        <s.Description>저기요 이 코드좀 봐주세요</s.Description>
        <s.LanguageTag>javascript</s.LanguageTag>
        <s.CodeBlockWrapper
          text={''}
          language={'javascript'}
          showLineNumbers
          startingLineNumber={1}
          theme={googlecode}
          codeBlock={true}
          codeContainerStyle={{ background: '#f2f2f2', color: 'black' }}
          customStyle={{ background: '#f2f2f2' }}
        />
        <s.ShowFirstComment>
          <s.CommentImage></s.CommentImage>
          <s.CommentTitleWrapper>
            <s.CommentUpperWrapper>
              <s.CommenterName>hyeyeonchurros</s.CommenterName>
              <s.CommentDate>2021년 11월 18일 16:00</s.CommentDate>
            </s.CommentUpperWrapper>
            <s.CommentDescription>scanf 오류 구문 넣어봐요 구글링 ㄱㄱ</s.CommentDescription>
          </s.CommentTitleWrapper>
        </s.ShowFirstComment>
      </s.CodeWrapper>
  );
};

export default Post;
