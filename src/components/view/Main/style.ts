import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 90vh;

  @media (orientation: portrait) {
    justify-content: start;
  }
`;

export const Frame = styled.div`
  width: min(1000px, 95vw);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  display: grid;
  @media (max-width: 750px) {
    grid-template-rows: 1fr 1fr;
    width: 100vw;
  }
  @media (min-width: 751px) {
    grid-template-columns: 1fr 1fr;
    height: 441px;
  }
  padding: 5rem;
  gap: 4rem;
`;

export const TitledText = styled.div`
  text-transform: uppercase;
  font-size: 24px;
  width: 100px;
  text-align: center;
  margin: 5rem auto;
`;
