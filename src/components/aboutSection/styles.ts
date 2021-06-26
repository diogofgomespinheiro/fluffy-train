import styled from 'styled-components';
import {
  body1Mixin,
  deviceQueries
} from '@diogop_96/portfolio-component-library';

import { sectionMixin } from '@/styles';

export const SectionContainer = styled.section`
  ${sectionMixin}

  align-items: flex-start;
  width: 100%;
`;

export const PersonalInfoContainer = styled.div`
  margin-bottom: 40px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (${deviceQueries.tablet.min}) {
    margin-bottom: 40px;
  }
`;

export const Description = styled.p`
  ${body1Mixin};

  color: ${({ theme }) => theme.colors.secondary};
  white-space: pre-line;
`;

export const TabsWrapper = styled.div`
  width: 100%;
`;
