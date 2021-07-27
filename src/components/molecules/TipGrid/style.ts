import styled from 'styled-components';
export { default as TipInput } from '~/components/atoms/ClearInput';

export const Wrapper = styled.div`
  
`;
export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  height: 60%;
  gap: 10px;
`;

export const Text  = styled.p`
  font-size: 18px;
  margin: 0 0 20px;
`;

export const TipButton = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBackground};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover { 
    cursor: pointer;
    color: ${({ theme }) => theme.colors.darkBackground};
    background-color: ${({ theme }) => theme.colors.selected};
  }
`;