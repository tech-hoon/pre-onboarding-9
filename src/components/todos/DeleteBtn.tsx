import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeTodo } from 'store/actions/todos';

interface Props {
  id: string;
}

const DeleteBtn = ({ id }: Props) => {
  const dispatch = useDispatch();
  const onRemove = (id: string) => dispatch(removeTodo(id));

  return (
    <>
      <Button onClick={() => onRemove(id)}>X</Button>
    </>
  );
};

const Button = styled.button`
  font-size: 16px;
`;

export default DeleteBtn;
