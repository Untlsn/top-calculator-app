import React, { useContext } from 'react';
import * as S from './style';
import * as Store from '~/providers/StoreProvider';
import handleChange from '~/helpers/handleChange';

const Bill = () => {
  const [bill, editBill] = useContext(Store.Bill);

  return (
    <S.Wrapper>
      <S.Text>Bill</S.Text>
      <S.Dollar htmlFor='bill-input'>$</S.Dollar>
      <S.Input id='bill-input' value={bill} onChange={handleChange(editBill, 'number')} />
    </S.Wrapper>
  );
};

export default Bill;