import React from 'react';
import styled from 'styled-components';

interface Props {}

const Form = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('form submit');
  };

  return (
    <FormStyled onSubmit={(e) => handleSubmit(e)}>
      <Input placeholder='할 일을 입력해주세요' />
      <CreateBtn>추가하기</CreateBtn>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  width: 100%;
  display: flex;
`;

const Input = styled.input`
  padding: 8px;
  width: 80%;
`;

const CreateBtn = styled.button`
  color: white;
  background-color: #5ecdb3;
  padding: 8px;
  width: 20%;
`;
export default Form;
