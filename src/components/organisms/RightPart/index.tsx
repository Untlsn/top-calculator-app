import React, { useContext } from 'react';
import * as S from './style';
import * as Store from '~/providers/StoreProvider';

const LeftPart = () => {
  const [tips, editTips] = useContext(Store.Tips);
  const [people, editPeople] = useContext(Store.People);
  const [bill, editBill] = useContext(Store.Bill);

  const fullTips = bill * (tips / 100);
  const tipPerPerson = people ? fullTips / people : 0;
  const totalPerPerson = people ? bill / people : 0;

  const clear = () => {
    editTips(0);
    editBill(0);
    editPeople('');
  };

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.PerPerson>Tip Amount</S.PerPerson>
        <S.BigResult>{tipPerPerson.toFixed(2)}</S.BigResult>
      </S.TextWrapper>
      <S.TextWrapper>
        <S.PerPerson>Total</S.PerPerson>
        <S.BigResult>{totalPerPerson.toFixed(2)}</S.BigResult>
      </S.TextWrapper>
      <S.ResetButton onClick={clear}>reset</S.ResetButton>
    </S.Wrapper>
  );
};

export default LeftPart;