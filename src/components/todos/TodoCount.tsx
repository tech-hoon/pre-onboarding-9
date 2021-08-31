import styled from 'styled-components';

interface Props {}

const TodoCount = (props: Props) => {
  return <Title>남은 일이 3개 남았어요</Title>;
};

const Title = styled.p`
  color: white;
  text-align: center;
  margin: 12px 0;
`;

export default TodoCount;
