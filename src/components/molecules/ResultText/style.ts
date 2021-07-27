import styled from 'styled-components';

export const Wrapper = styled.div`
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