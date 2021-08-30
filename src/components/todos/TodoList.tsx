import styled from 'styled-components';
import React from 'react';

const TodoList: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div``;

export default TodoList;
