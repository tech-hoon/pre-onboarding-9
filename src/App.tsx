import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TodoList, TodoItem, TodoCount, CreateForm } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { FETCH_TODOS } from 'store/actions/types';

const App: React.FC = () => {
  const { todoList, loading } = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    const onFetch = () => dispatch({ type: FETCH_TODOS });

    onFetch();
  }, [dispatch]);

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

const LoadingContainer = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const TodoContainer = styled.div`
  width: 90%;
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
