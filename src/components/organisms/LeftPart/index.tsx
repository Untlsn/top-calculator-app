import React from 'react';
import * as S from './style';
import Bill from '~/components/molecules/Bill';
import TipGrid from '~/components/molecules/TipGrid';
import People from '~/components/molecules/People';

const LeftPart = () => {
  return (
    <S.Wrapper>
      <Bill />
      <TipGrid />
      <People />
    </S.Wrapper>
  );
};

export default LeftPart;