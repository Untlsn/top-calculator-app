import React from 'react';
import * as S from './style';

const People = () => {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Text>Number  of  people</S.Text>
        {/*<S.Text>Can’t   be   zero</S.Text>*/}
      </S.TextWrapper>
      <S.Person />
      <S.Input />
    </S.Wrapper>
  );
};

export default People;