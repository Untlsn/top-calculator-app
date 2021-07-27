import React from 'react';
import * as S from './style';
import { tipPercent } from '~/components/molecules/TipGrid/data';

const TipGrid = () => {
  const createdTips = tipPercent.map(num => <S.TipButton key={num}>{num}%</S.TipButton>);
  return (
    <S.Wrapper>
      <S.Text>Select Tip %</S.Text>
      <S.Grid>
        {createdTips}
        <S.TipInput />
      </S.Grid>
    </S.Wrapper>
  );
};

export default TipGrid;