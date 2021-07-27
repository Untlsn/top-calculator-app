import React from 'react';
import * as S from './style';
import LeftPart from '~/components/organisms/LeftPart';
import RightPart from '~/components/organisms/RightPart';

const Main = () => {
  return (
    <S.Wrapper>
      <S.TitledText>spli tter</S.TitledText>
      <S.Frame>
        <LeftPart />
        <RightPart />
      </S.Frame>
    </S.Wrapper>
  );
};

export default Main;