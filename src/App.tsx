import React from 'react';
import GlobalStyle from "./style/globalStyle";
import {RecoilRoot} from "recoil";
function App() {
  return (
    <RecoilRoot>
    <GlobalStyle></GlobalStyle>
    </RecoilRoot>
  );
}

export default App;
