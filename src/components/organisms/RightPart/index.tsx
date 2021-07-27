import React, { useContext } from 'react';
import * as S from './style';
import * as Store from '~/providers/StoreProvider';

const LeftPart = () => {
  const [, editTips] = useContext(Store.Tips);
  const [, editPeople] = useContext(Store.People);
  const [, editBill] = useContext(Store.Bill);

  const clear = () => {
    editTips(0);
    editBill(0);
    editPeople('');
  };

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.PerPerson>Tip Amount</S.PerPerson>
        <S.BigResult>0.00</S.BigResult>
      </S.TextWrapper>
      <S.TextWrapper>
        <S.PerPerson>Total</S.PerPerson>
        <S.BigResult>0.00</S.BigResult>
      </S.TextWrapper>
      <S.ResetButton onClick={clear}>reset</S.ResetButton>
    </S.Wrapper>
  );
};

export default LeftPart;