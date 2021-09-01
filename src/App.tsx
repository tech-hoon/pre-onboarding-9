import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TodoList, TodoItem, TodoCount, CreateForm } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { FETCH_TODOS } from 'store/actions/types';

const App: React.FC = () => {
  const { todoList } = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    const onFetch = () => dispatch({ type: FETCH_TODOS });

    onFetch();
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <Container>
          <Title>Todo List</Title>
          <CreateForm />
          <TodoCount />
          <TodoList>
            {todoList.map((todo, id) => (
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
  margin: auto 0;
`;

const Title = styled.h1`
  margin-bottom: 12px;
  font-size: 30px;
  text-align: center;
  color: white;
`;

export default App;
