import React from 'react';
import styled from 'styled-components';

interface Props {}

const CheckBtn = (props: Props) => {
  return (
    <>
      <Button>✅</Button>
    </>
  );
};

const Button = styled.button`
  font-size: 16px;
`;

export default CheckBtn;
