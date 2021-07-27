import React from 'react';
import * as S from './style';
import { ResultTextProps } from './types';

const ResultText = ({ per, children }: ResultTextProps) => {
  return (
    <S.Wrapper>
      <S.PerPerson>{per}</S.PerPerson>
      <S.BigResult>{children}</S.BigResult>
    </S.Wrapper>
  );
};

export default ResultText;