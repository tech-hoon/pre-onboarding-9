import React from 'react';
import styled from 'styled-components';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const TodoList: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div``;

export default React.memo(TodoList);
