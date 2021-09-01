import React from 'react';
import styled from 'styled-components';
import { TodoTypes } from 'store/actions/types';
import { useTodo } from 'hooks/useTodo';

interface Props {
  todo: TodoTypes;
}

const CheckBtn = ({ todo }: Props) => {
  const { onToggle } = useTodo();

  return (
    <>
      <Button onClick={() => onToggle(todo)}>{todo.isCheck ? '☑️' : '✅'}</Button>
    </>
  );
};

const Button = styled.button`
  font-size: 16px;
  &:hover {
    transform: scale(1.2);
  }
`;

export default React.memo(CheckBtn);
