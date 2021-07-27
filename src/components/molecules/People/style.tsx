import styled from 'styled-components';
import ClearInput from '~/components/atoms/ClearInput';
import { BsPersonFill } from 'react-icons/bs';

export const Wrapper = styled.div`
  position: relative;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Text = styled.p<{ $red?: boolean }>`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  
  color: ${({ $red, theme }) => $red && theme.colors.error};
`;

export const Person = styled(BsPersonFill)`
  position: absolute;
  left: 10px;
  bottom: 15px;
  color: ${({ theme }) => theme.colors.shadowText};
`;

export const Input = styled(ClearInput)<{ $red: boolean }>`
  top: 0;
  left: 0;
  height: 40px;
  color: ${({ $red, theme }) => $red && theme.colors.error};
  border-color: ${({ $red, theme }) => $red && theme.colors.error};
`;