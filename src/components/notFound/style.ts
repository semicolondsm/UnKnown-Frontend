import styled from "styled-components";
import {ReactComponent as WarnningIcon} from "../../assets/notFound/WarnningIcon.svg";

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction : column;
  margin: 0 auto;
`

export const NotFoundMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 100px 0;
  width: 100%;
  border-bottom: 3px solid #ececec;
  >p{
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
  }
`

export const WarnningIconBox = styled(WarnningIcon)`
  width: 32px;
  height: 32px;
`
export const WarnningDescription = styled.div`
  margin-top: 200px;
  white-space: pre-wrap;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 120px auto 0 auto;
  font-weight: 600;
  line-height: 28px;
`  