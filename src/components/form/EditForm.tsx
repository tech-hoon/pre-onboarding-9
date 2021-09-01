import React from 'react';
import styled from 'styled-components';
import { useForm } from 'hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { EDIT_TODO, TodoTypes } from 'store/actions/types';
import { RootState } from 'store';

interface Props {
  handleToggle: () => void;
  todo: TodoTypes;
}

const EditForm = ({ todo, handleToggle }: Props) => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state: RootState) => state.todos);
  const { value, onSubmit, onChange } = useForm(onEdit);

  function onEdit(content: string) {
    dispatch({ type: EDIT_TODO, prevTodoList: todoList, todo: { ...todo, content } });
    handleToggle();
  }

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
`;

const CreateBtn = styled.button`
  color: white;
  background-color: #5ecdb3;
  padding: 10px;
  width: 20%;
`;
export default React.memo(EditForm);
