import React from 'react';
import styled from 'styled-components';
import { TodoList, TodoItem, TodoCount, CreateForm, LoadingContainer } from 'components';
import { useTodo } from 'hooks/useTodo';

const App: React.FC = () => {
  const { todoList, loading } = useTodo();

  return (
    <>
      <Wrapper>
        {loading ? (
          <LoadingContainer />
        ) : (
          <TodoContainer>
            <Title>PAYWORK</Title>
            <Subtitle>TODO LIST</Subtitle>
            <CreateForm />
            <TodoCount />
            <TodoList>
              {todoList.map((todo, id) => (
                <TodoItem key={id} todo={todo} />
              ))}
            </TodoList>
          </TodoContainer>
        )}
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

const TodoContainer = styled.div`
  width: 85%;
  max-width: 400px;
  margin: auto 0;
`;

const Title = styled.h1`
  margin-bottom: 12px;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 10px;
  text-align: center;
  color: white;
`;

const Subtitle = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  letter-spacing: 5px;
  font-weight: 400;
  text-align: center;
  color: white;
`;

export default React.memo(App);
