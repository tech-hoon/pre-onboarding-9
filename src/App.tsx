import React from 'react';
import styled from 'styled-components';
import { TodoList, TodoItem, TodoCount, Form } from 'components';
import { useSelector } from 'react-redux';
import { RootState } from './store';

const App: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <>
      <Wrapper>
        <Container>
          <Title>Todo List</Title>
          <Form />
          <TodoCount />
          <TodoList>
            {todos.map((todo, id) => (
              <TodoItem key={id} todo={todo} />
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
