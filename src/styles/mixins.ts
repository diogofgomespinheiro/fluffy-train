import { css } from 'styled-components';
import { deviceQueries } from '@diogop_96/portfolio-component-library';

export const sectionMixin = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 72px);

  @media screen and (${deviceQueries.tablet.min}) {
    min-height: calc(100vh - 110px);
  }
`;
