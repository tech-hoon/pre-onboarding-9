import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { TodoList, TodoItem } from './components';

const App: React.FC = () => {
  const items = ['item-1', 'item-2', 'item-3'];

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TodoList>
          {items.map((item, id) => (
            <TodoItem key={id} item={item} />
          ))}
        </TodoList>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default App;
