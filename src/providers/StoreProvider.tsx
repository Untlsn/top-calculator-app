import React, { createContext, useState } from 'react';
import { OnlyChildren } from '~/types/only';

type StateResult<T> = [T, React.Dispatch<React.SetStateAction<T>>]

export const Bill = createContext<StateResult<number>>([0, () => {}] as any);
export const People = createContext<StateResult<number|''>>(['', () => {}] as any);
export const Tips = createContext<StateResult<number>>([0, () => {}] as any);

const StoreProvider = ({ children }: OnlyChildren) => {
  const [bill, editBill] = useState(0);
  const [people, editPeople] = useState<number|''>('');
  const [tips, editTips] = useState(0);

  if (bill > 1000000) editBill(1000000);
  if (people > 1000000) editPeople(1000000);
  if (tips > 100) editTips(100);

  return (
    <Bill.Provider value={[bill, editBill]}>
      <People.Provider value={[people, editPeople]}>
        <Tips.Provider value={[tips, editTips]}>
          {children}
        </Tips.Provider>
      </People.Provider>
    </Bill.Provider>
  );
};

export default StoreProvider;