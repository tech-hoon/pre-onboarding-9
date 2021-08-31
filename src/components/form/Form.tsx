import styled from 'styled-components';
import { useForm } from 'hooks/useForm';
import { useDispatch } from 'react-redux';
import { addTodo } from 'store/actions/todos';

const Form = () => {
  const dispatch = useDispatch();
  const onAdd = (content: string) => dispatch(addTodo(content));
  const { value, onSubmit, onChange } = useForm(onAdd);

  return (
    <FormStyled onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} placeholder='할 일을 입력해주세요' />
      <CreateBtn>추가하기</CreateBtn>
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

const CreateBtn = styled.button`
  color: white;
  background-color: #5ecdb3;
  padding: 10px;
  width: 20%;
`;
export default Form;
