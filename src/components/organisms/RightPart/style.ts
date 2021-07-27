import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  padding: 3rem;
  border-radius: 10px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BigResult = styled.div`
  position: relative;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.preSelect};

  &::before {
    content: '$';
    display: block;
    position: absolute;
    left: -24px;
    top: 6px;
    font-size: 40px;
  }
`;

export const PerPerson = styled.p`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  width: 50%;
  
  &::after {
    content: '/ person';
    display: block;
    position: absolute;
    top: 24px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.shadowText};
  }
`;

export const ResetButton = styled.button`
  width: 90%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.preSelect};
  align-self: flex-end;
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
`;