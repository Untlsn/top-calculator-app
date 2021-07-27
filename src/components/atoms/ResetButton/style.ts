import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 90%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.preSelect};
  justify-self: center;
  height: 35%;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;


  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.darkBackground};
    background-color: ${({ theme }) => theme.colors.selected};
  }
  @media (orientation: landscape) {
    align-self: flex-end;
  }
  @media (orientation: portrait) {
    height: 50%;
  }
`;