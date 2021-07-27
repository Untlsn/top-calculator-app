import React, { useContext } from 'react';
import * as S from './style';
import * as Store from '~/providers/StoreProvider';
import ResultText from '~/components/molecules/ResultText';
import ResetButton from '~/components/atoms/ResetButton';

const LeftPart = () => {
  const tips = useContext(Store.Tips)[0];
  const people = useContext(Store.People)[0];
  const bill = useContext(Store.Bill)[0];

  const fullTips = bill * (tips / 100);
  const tipPerPerson = people ? fullTips / people : 0;
  const totalPerPerson = people ? bill / people : 0;

  return (
    <S.Wrapper>
      <ResultText per='Tip Amount'>{tipPerPerson.toFixed(2)}</ResultText>
      <ResultText per='Total'>{totalPerPerson.toFixed(2)}</ResultText>
      <ResetButton />
    </S.Wrapper>
  );
};

export default LeftPart;