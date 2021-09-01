import React from 'react';
import styled from 'styled-components';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const TodoList: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.ul`
  height: 55vh;
  overflow: hidden;
  overflow-y: scroll;
`;

export default React.memo(TodoList);
