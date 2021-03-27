import styled from 'styled-components';
import { spacing } from '../../theme';

export const ListGrid = styled.div`
  width: 100%;
  display: grid;
  grid-column-gap: ${spacing(4)};
  grid-row-gap: ${spacing(1)};
  grid-template-columns: ${(p) => (p.double ? '1fr 1fr' : '1fr')};

  @media all and (max-width: 1199px) {
    grid-template-columns: 1fr;
  }
`;
