import styled from 'styled-components';

export const StyledBtn = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: ${props => {
    switch (props.color) {
      case 'good':
        return 'green';
      case 'neutral':
        return 'orange';
      default:
        return 'red';
    }
  }};
  border-radius: 5px;
  border: 1px solid;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  &:active {
    opacity: 0.7;
  }
`;

export const StyledBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 10px;
`;
