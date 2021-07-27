import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
`;

export const Dollar = styled.label`
  position: absolute;
  left: 10px;
  color: ${({ theme }) => theme.colors.shadowText};
`;

export const Input = styled.input.attrs({ type: 'number' })`
  top: 0;
  left: 0;
  border: 2px solid transparent;
  height: 40px;
  border-radius: 5px;
  width: 100%;
  text-align: right;
  font-size: 24px;
  outline: ${({ theme }) => theme.colors.selected};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  &:hover { 
    cursor: pointer;
    border-color: ${({ theme }) => theme.colors.selected};
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;