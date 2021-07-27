import styled from 'styled-components';
import ClearInput from '~/components/atoms/ClearInput';

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

export const Input = styled(ClearInput)`
  top: 0;
  left: 0;
  height: 40px;
`;

export const Centering = styled.div`
  display: flex;
  align-items: center;
`;