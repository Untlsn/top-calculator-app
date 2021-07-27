import React from 'react';
import * as S from './style';

const Bill = () => {
  return (
    <S.Wrapper>
      <S.Text>Bill</S.Text>
      <S.Dollar htmlFor='bill-input'>$</S.Dollar>
      <S.Input id='bill-input' />
    </S.Wrapper>
  );
};

export default Bill;