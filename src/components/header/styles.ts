import styled from 'styled-components';
import { deviceQueries } from '@diogop_96/portfolio-component-library';

export const Logo = styled.div`
  height: 20px;
  width: 20px;
  background: ${({ theme }) => `url(assets/${theme.logo}.svg)`};
  background-size: contain;
  cursor: pointer;

  @media screen and (${deviceQueries.tablet.min}) {
    height: 40px;
    width: 40px;
  }
`;
