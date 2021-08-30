import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>Hello</Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default App;
