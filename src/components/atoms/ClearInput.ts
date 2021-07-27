import styled from 'styled-components';

const ClearInput = styled.input`
  border: 2px solid transparent;
  border-radius: 5px;
  font-size: 24px;
  outline: ${({ theme }) => theme.colors.selected};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  text-align: right;
  width: 100%;
  &:hover { 
    cursor: pointer;
    border-color: ${({ theme }) => theme.colors.selected};
  }
`;

export default ClearInput;