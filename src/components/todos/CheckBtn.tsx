import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TodoTypes, TOGGLE_TODO } from 'store/actions/types';
import { RootState } from 'store';

interface Props {
  todo: TodoTypes;
}

const CheckBtn = ({ todo }: Props) => {
  const { todoList } = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  function onToggle() {
    dispatch({ type: TOGGLE_TODO, prevTodoList: todoList, todo: todo });
  }

  return (
    <>
      <Button onClick={() => onToggle()}>{todo.isCheck ? '☑️' : '✅'}</Button>
    </>
  );
};

const Button = styled.button`
  font-size: 16px;
`;

export default CheckBtn;
