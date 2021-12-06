import styled from 'styled-components';
import { ReactComponent as DropDownArrow } from '../../assets/writePost/DropDownArrow.svg';
export const WritePostWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;
export const WriteWrapperTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 56px 0 25px 0;
`;
export const DiscriptionInput = styled.input`
  height: 60px;
  border: none;
  border-top: 3px solid #b8b8b8;
  border-bottom: 3px solid #b8b8b8;
  border-radius: 0;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  padding: 0 10px;
`;
export const CodeWrapper = styled.div`
  padding: 20px 10px;
  min-height: 400px;
  & span {
    background-color: #f2f2f2 !important;
  }
`;
export const SelectCodeWrapper = styled.div`
  display: flex;
  > p {
    color: #989898;
    font-weight: 600;
  }
  margin-bottom: 20px;
  height: 28px;
`;
export const SelectTextArea = styled.textarea`
  font-size: inherit;
  font-family: inherit;
  line-height: 1.66667;
  height: fit-content;
  resize: none;
  background-color: #f2f2f2;
  border: none;
  overflow-y: visible;
  width: 100%;
  padding: 10px;
  height: 350px;

`;
export const SelectLanguageBtn = styled.div`
  height: 28px;
  border-radius: 14px;
  padding: 0 7px;
  border: 2px solid #989898;
  margin: 0 10px;
  display: flex;
  font-size: 13px;
  font-weight: 600;
  align-items: center;
  cursor: pointer;
`;
export const SelectLanguageBtnIcon = styled(DropDownArrow)`
  margin-left: 10px;
`;
export const SelectDropDownMenu = styled.div`
  width: 190px;
  height: 270px;
  border-radius: 4px;
  box-shadow: 3px 1px 8px #d6d6d6;
  position: relative;
  top: 36px;
  right: 57px;
  background-color: white;
  z-index: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
export const SelectMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
`;
export const SelectMenuBox = styled.div`
  padding: 5px 0 5px 14px;
  font-size: 15px;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    background-color: #e5e5e5;
  }
`;

export const CodeButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 50px;
`;

export const CodeButton = styled.button<{ isBlack: boolean }>`
  width: 160px;
  height: 48px;
  border-radius: 24px;
  margin-left: 20px;
  border: none;
  border: 2px solid black;
  font-size: 16px;
  font-weight: 600;
  background-color: ${props => (props.isBlack ? 'black' : 'white')};
  color: ${props => (props.isBlack ? 'white' : 'black')};
  cursor: pointer;
`;
