import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { toggleTodo } from 'store/actions/todos';

interface Props {
  id: string;
  isCheck: boolean;
}

const CheckBtn = ({ id, isCheck }: Props) => {
  const dispatch = useDispatch();
  const onToggle = (id: string) => dispatch(toggleTodo(id));

  return (
    <>
      <Button onClick={() => onToggle(id)}>{isCheck ? '👍' : '👎'}</Button>
    </>
  );
};

const Button = styled.button`
  font-size: 16px;
`;

export default CheckBtn;
