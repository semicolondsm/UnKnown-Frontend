import styled from "styled-components";
import {ReactComponent as SearchIcon} from "../../assets/header/SearchIcon.svg";



export const SearchBarWrapper = styled.div`
  min-width:100%;
`
export const SearchBarBox = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  border: 1px solid black;
  border-radius: 0;
  padding: 16px;
  font-size: 20px;
  color: black;
`

export const SearchIconBox = styled(SearchIcon)`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
  top: 8px;
`