import React from 'react';
import styled from 'styled-components';

interface Props {}

const DeleteBtn = (props: Props) => {
  return (
    <>
      <Button>X</Button>
    </>
  );
};

const Button = styled.button`
  font-size: 16px;
`;

export default DeleteBtn;
