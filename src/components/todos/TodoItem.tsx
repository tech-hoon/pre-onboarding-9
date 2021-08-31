import styled from 'styled-components';
import { DeleteBtn, CheckBtn } from 'components';
import { TodoTypes } from 'types/TodoTypes';

interface Props {
  todo: TodoTypes;
}

const TodoItem = ({ todo: { id, content, isCheck } }: Props) => (
  <Wrapper>
    <CheckBtn id={id} isCheck={isCheck} />
    <Content>{content}</Content>
    <DeleteBtn id={id} />
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

const Content = styled.h2`
  font-size: 16px;
`;

export default TodoItem;
