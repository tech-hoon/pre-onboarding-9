import styled from 'styled-components';
import { DeleteBtn, CheckBtn } from 'components';

interface Props {
  item: string;
}

const TodoItem = ({ item }: Props) => (
  <Wrapper>
    <CheckBtn />
    <Text>{item}</Text>
    <DeleteBtn />
  </Wrapper>
);

const Wrapper = styled.div`
  border: 0.1px solid #eeeeee;
  padding: 10px;
  margin: 4px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const Text = styled.h2`
  font-size: 16px;
`;

export default TodoItem;
