import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/header/SearchIcon.svg';
import { ReactComponent as PenIcon } from '../../assets/header/pen.svg';

export const HeaderWrapper = styled.div`
  height: 42px;
  width: 100%;
  min-width: 800px;
  border-bottom: 1px solid #cccccc;
`;
export const MenuWrapper = styled.div`
  margin: 0 246px;
  height: 100%;
  display: flex;
  min-width: fit-content;
  align-items: center;
  justify-content: flex-end;
  min-width: fit-content;
`;
export const SearchBox = styled.div`
  width: 26.6px;
  height: 26.6px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  :hover {
    background-color: #cccccc;
  }
`;

export const Search = styled(SearchIcon)`
  width: 18px;
  height: 18px;
`;

export const Pen = styled(PenIcon)`
  width: 10px;
  height: 10px;
  margin-right: 4px;
`;

export const Post = styled.button`
  width: 123px;
  height: 26.6px;
  color: white;
  font-size: 10px;
  font-weight: 600;
  border-radius: 50px;
  background-color: black;
  border: none;
  margin: 0 19px;
  cursor: pointer;
`;

export const AuthTitle = styled.p`
  font-size: 11px;
  color: black;
  width: 90px;
  font-weight: 600;
  cursor: pointer;
  width: fit-content;
  margin-right: 18px;
`;
