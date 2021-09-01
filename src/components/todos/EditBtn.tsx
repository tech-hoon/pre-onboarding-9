import React from 'react';
import styled from 'styled-components';

interface Props {
  handleToggle: () => void;
}

const EditBtn = ({ handleToggle }: Props) => {
  const onClick = () => handleToggle();

  return (
    <>
      <Button onClick={onClick}>✏️</Button>
    </>
  );
};

const Button = styled.button`
  font-size: 16px;
  &:hover {
    transform: scale(1.2);
  }
`;

export default React.memo(EditBtn);
