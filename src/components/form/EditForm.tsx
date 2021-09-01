import React from 'react';
import styled from 'styled-components';
import { useForm } from 'hooks/useForm';
import { TodoTypes } from 'store/actions/types';
import { useTodo } from 'hooks/useTodo';

interface Props {
  handleToggle: () => void;
  todo: TodoTypes;
}

const EditForm = ({ todo, handleToggle }: Props) => {
  const { onEdit } = useTodo();
  const { value, onSubmit, onChange } = useForm(() => onEdit(value, todo, handleToggle));

  return (
    <FormStyled onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} placeholder='할 일을 입력해주세요' autoFocus />
      <CancelBtn type='button' onClick={handleToggle}>
        취소
      </CancelBtn>
      <CreateBtn type='submit'>추가</CreateBtn>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  padding: 10px;
  width: 80%;
  font-size: 14px;
`;

const CancelBtn = styled.button`
  color: #686868;
  background-color: #cecece;
  padding: 10px;
  width: 20%;

  &:hover {
    background-color: #636363ea;
    color: white;
    transition: 0.5s ease;
  }
`;

const CreateBtn = styled.button`
  color: white;
  background-color: #5ecdb3;
  padding: 10px;
  width: 20%;

  &:hover {
    background-color: #237965ea;
    transition: 0.5s ease;
  }
`;
export default React.memo(EditForm);
