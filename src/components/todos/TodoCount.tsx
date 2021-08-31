import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const TodoCount = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return <Title>남은 일이 {todos.length}개 남았어요</Title>;
};

const Title = styled.p`
  color: white;
  text-align: center;
  margin: 12px 0;
`;

export default TodoCount;
