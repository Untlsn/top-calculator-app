import React, { useContext } from 'react';
import * as S from './style';
import * as Store from '~/providers/StoreProvider';
import handleChange from '~/helpers/handleChange';

const People = () => {
  const [people, editPeople] = useContext(Store.People);

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Text>Number  of  people</S.Text>
        {people === 0 && <S.Text $red>Can’t   be   zero</S.Text>}
      </S.TextWrapper>
      <S.Centering>
        <S.Person />
        <S.Input $red={people === 0} value={people} onChange={handleChange(editPeople, 'number')} />
      </S.Centering>
    </S.Wrapper>
  );
};

export default People;