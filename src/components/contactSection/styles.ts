import styled from 'styled-components';
import { deviceQueries } from '@diogop_96/portfolio-component-library';

import { sectionMixin } from '@/styles';

export const Container = styled.section`
  ${sectionMixin}
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.p`
  margin: 40px 0;
  max-width: 600px;

  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;
