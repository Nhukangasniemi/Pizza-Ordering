import React from "react";
import { createGlobalStyle } from "styled-components";
import { Navbar } from './Navbar/Navbar';

interface GlobalProps {}

const GlobalStyle = createGlobalStyle<GlobalProps>`
  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <div>Hello Sliceline</div>
    </>
  );
};

export default App;
