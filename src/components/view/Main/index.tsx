import React from 'react';
import * as S from './style';
import LeftPart from '~/components/organisms/LeftPart';

const Main = () => {
  return (
    <S.Wrapper>
      <S.TitledText>spli tter</S.TitledText>
      <S.Frame>
        <LeftPart />
      </S.Frame>
    </S.Wrapper>
  );
};

export default Main;