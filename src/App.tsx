import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { TodoList, TodoItem, TodoCount, Form } from 'components';

const App: React.FC = () => {
  const items = ['item-1', 'item-2', 'item-3'];

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Title>Todo List</Title>
          <Form />
          <TodoCount />
          <TodoList>
            {items.map((item, id) => (
              <TodoItem key={id} item={item} />
            ))}
          </TodoList>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: coral;
  height: 100vh;
`;

const Container = styled.div`
  width: 90%;
  max-width: 400px;
`;

const Title = styled.h1`
  margin-top: 33%;
  margin-bottom: 12px;
  font-size: 30px;
  text-align: center;
  color: white;
`;

export default App;
