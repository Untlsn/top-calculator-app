import React, { useContext } from 'react';
import * as S from './style';
import * as Store from '~/providers/StoreProvider';

const ResetButton = () => {
  const editTips = useContext(Store.Tips)[1];
  const editPeople = useContext(Store.People)[1];
  const editBill = useContext(Store.Bill)[1];

  const clear = () => {
    editTips(0);
    editBill(0);
    editPeople('');
  };
  return (
    <S.Wrapper onClick={clear}>reset</S.Wrapper>
  );
};

export default ResetButton;