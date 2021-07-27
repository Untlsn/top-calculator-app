import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 90vh;
`;

export const Frame = styled.div`
  width: 65vw;
  height: 55vh;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 5rem;
  gap: 4rem;
`;

export const TitledText = styled.div`
  text-transform: uppercase;
  font-size: 24px;
  width: 100px;
  text-align: center;
  margin: 0 auto;
`;
