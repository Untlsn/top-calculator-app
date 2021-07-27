import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;

  @media (orientation: portrait) {
    gap: 20px;
  }
`;