import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_TODO, TodoTypes } from 'store/actions/types';
import { RootState } from 'store';

interface Props {
  todo: TodoTypes;
}

const DeleteBtn = ({ todo }: Props) => {
  const { todoList, msg } = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();
  function onRemove() {
    dispatch({ type: REMOVE_TODO, prevTodoList: todoList, todo });
  }

  return (
    <>
      <Button onClick={() => onRemove()}>X</Button>
    </>
  );
};

const Button = styled.button`
  font-size: 16px;
`;

export default DeleteBtn;
