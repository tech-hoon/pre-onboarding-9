import styled from 'styled-components';
interface Props {
  item: string;
}

const TodoItem = ({ item }: Props) => (
  <Wrapper>
    <Item>{item}</Item>
  </Wrapper>
);

const Wrapper = styled.div`
  border: 1px solid black;
`;

const Item = styled.h2`
  font-size: 12px;
`;

export default TodoItem;
