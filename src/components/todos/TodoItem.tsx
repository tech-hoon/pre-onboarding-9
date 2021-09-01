import React, { useState } from 'react';
import styled from 'styled-components';
import { DeleteBtn, CheckBtn, EditBtn } from 'components';
import { TodoTypes } from 'store/actions/types';
import EditForm from 'components/form/EditForm';

interface Props {
  todo: TodoTypes;
}

const TodoItem = ({ todo, todo: { id, content, isCheck } }: Props) => {
  const [editToggle, setEditToggle] = useState(false);
  const handleToggle = () => setEditToggle(!editToggle);

  return (
    <Wrapper>
      {!editToggle ? (
        <>
          <CheckBtn todo={todo} />
          <Content>{content}</Content>
          <EditBtn id={id} handleToggle={handleToggle} />
          <DeleteBtn todo={todo} />
        </>
      ) : (
        <EditForm todo={todo} handleToggle={handleToggle} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 0.1px solid #eeeeee;
  padding: 10px;
  margin: 8px 0;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`;

const Content = styled.h2`
  font-size: 16px;
  text-align: center;
  flex: 1;
`;

export default React.memo(TodoItem);
