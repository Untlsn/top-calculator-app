import React, { useContext } from 'react';
import * as S from './style';
import { tipPercent } from '~/components/molecules/TipGrid/data';
import * as Store from '~/providers/StoreProvider';
import handleChange from '~/helpers/handleChange';
import useBoolState from '~/hooks/useBoolState';

const TipGrid = () => {
  const [tips, editTips] = useContext(Store.Tips);
  const createdTips = tipPercent.map(
    num => <S.TipButton
      $selected={tips == num}
      onClick={() => {
        editTips(num);
        changeSelected.force(true);
      }}
      key={num}>
      {num}%
    </S.TipButton>,
  );
  const [selected, changeSelected] = useBoolState();

  return (
    <S.Wrapper>
      <S.Text>Select Tip %</S.Text>
      <S.Grid>
        {createdTips}
        <S.TipInput
          $empty={tips == 0}
          placeholder='Custom'
          value={selected ? '' : tips || ''}
          onChange={handleChange((value) => {
            editTips(value);
            changeSelected.force(false);
          }, 'number')} />
      </S.Grid>
    </S.Wrapper>
  );
};

export default TipGrid;