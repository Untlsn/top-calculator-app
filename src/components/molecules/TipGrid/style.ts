import styled, { css } from 'styled-components';
import ClearInput from '~/components/atoms/ClearInput';

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

export const TipButton = styled.div<{ $selected: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkBackground};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover { 
    cursor: pointer;
  }
  
  ${({ $selected, theme }) => $selected && css`
    color: ${theme.colors.darkBackground};
    background-color: ${theme.colors.selected};
  `}
`;

export const TipInput = styled(ClearInput)<{ $empty: boolean }>`
  text-align: ${({ $empty }) => $empty && 'center'};
`;