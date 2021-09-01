import styled from 'styled-components';

interface Props {
  id: string;
  handleToggle: () => void;
}

const EditBtn = ({ id, handleToggle }: Props) => {
  const onClick = () => {
    handleToggle();
  };

  return (
    <>
      <Button onClick={onClick}>✏️</Button>
    </>
  );
};

const Button = styled.button`
  font-size: 16px;
`;

export default EditBtn;
