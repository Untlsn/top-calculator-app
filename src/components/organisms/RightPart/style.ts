import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 2fr;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  padding: 3rem;
  border-radius: 10px;
  @media (orientation: portrait) {
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
  }
`;