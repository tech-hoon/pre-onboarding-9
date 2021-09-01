import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const TodoCount = () => {
  const { todoList } = useSelector((state: RootState) => state.todos);

  return <Title>남은 일이 {todoList.length}개 남았어요</Title>;
};

const Title = styled.p`
  color: white;
  text-align: center;
  margin: 12px 0;
`;

export default TodoCount;
