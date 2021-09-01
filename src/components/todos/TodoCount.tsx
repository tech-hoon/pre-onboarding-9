import React from 'react';
import styled from 'styled-components';
import { useTodo } from 'hooks/useTodo';

const TodoCount = () => {
  const { todoList } = useTodo();
  return <Title>남은 일이 {todoList.length}개 남았어요</Title>;
};

const Title = styled.p`
  color: white;
  text-align: center;
  margin: 16px 0;
`;

export default React.memo(TodoCount);
