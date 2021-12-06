import * as S from './style';
import { CodeBlock, googlecode } from 'react-code-blocks';
import React, { useState } from 'react';
import DropDownMenu from './DropDownMenu';
import SelectText from './SelectText';

const WritePost = () => {
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [state, setState] = useState('');
  const [isInput, setIsInput] = useState(false);
  const selectOnclick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsDropDown(!isDropDown);
  };
  return (
    <S.WritePostWrapper onClick={() => setIsDropDown(false)}>
      <S.WriteWrapperTitle>게시물 작성</S.WriteWrapperTitle>
      <S.DiscriptionInput placeholder='글 설명...'></S.DiscriptionInput>
      <S.CodeWrapper>
        <S.SelectCodeWrapper>
          <p>code</p>
          <S.SelectLanguageBtn onClick={selectOnclick}>
            C
            <S.SelectLanguageBtnIcon />
          </S.SelectLanguageBtn>
          {isDropDown && <DropDownMenu setIsDropDown={setIsDropDown} />}
        </S.SelectCodeWrapper>
        {isInput ? (
          <SelectText setState={setState} state={state} setIsInput={setIsInput} />
        ) : (
          <div onClick={() => setIsInput(true)}>
            <CodeBlock
              text={state}
              language={'javascript'}
              showLineNumbers
              startingLineNumber={1}
              theme={googlecode}
              codeBlock={true}
              codeContainerStyle={{ background: '#f2f2f2', color: 'black' }}
              customStyle={{ background: '#f2f2f2' }}
            />
          </div>
        )}
      </S.CodeWrapper>
      <S.CodeButtonWrapper>
        <S.CodeButton isBlack={false}>취소</S.CodeButton>
        <S.CodeButton isBlack={true}>완료</S.CodeButton>
      </S.CodeButtonWrapper>
    </S.WritePostWrapper>
  );
};

export default WritePost;
