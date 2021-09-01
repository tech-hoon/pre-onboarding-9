import styled from 'styled-components';
import { useForm } from 'hooks/useForm';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TODO } from 'store/actions/types';
import { RootState } from 'store';

const CreateForm = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state: RootState) => state.todos);
  const { value, onSubmit, onChange } = useForm(onAdd);

  function onAdd(content: string) {
    dispatch({ type: ADD_TODO, prevTodoList: todoList, content });
  }

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
export default CreateForm;
