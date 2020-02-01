import React from "react";
import { createGlobalStyle } from "styled-components";

interface GlobalProps {}

const GlobalStyle = createGlobalStyle<GlobalProps>`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

const App: React.FC = () => {
  return (
    <>
    <h1>Hello Sliceline</h1>
      <GlobalStyle />
      <div>Hello Sliceline</div>
    </>
  );
};

export default App;
