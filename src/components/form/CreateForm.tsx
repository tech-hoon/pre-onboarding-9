import React from 'react';
import styled from 'styled-components';
import { useForm } from 'hooks/useForm';
import { useTodo } from 'hooks/useTodo';

const CreateForm = () => {
  const { onAdd } = useTodo();
  const { value, onSubmit, onChange } = useForm(onAdd);

  return (
    <FormStyled onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} placeholder='할 일을 입력해주세요' autoFocus />
      <CreateBtn type='submit'>추가하기</CreateBtn>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  padding: 14px;
  width: 80%;
  font-size: 14px;
  border-radius: 4px 0 0 4px;
`;

const CreateBtn = styled.button`
  color: white;
  background-color: #5ecdb3;
  padding: 10px;
  width: 20%;
  border-radius: 0 4px 4px 0;

  &:hover {
    background-color: #237965ea;
    transition: 0.5s ease;
  }
`;
export default React.memo(CreateForm);
