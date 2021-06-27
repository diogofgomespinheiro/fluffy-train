import styled from 'styled-components';
import { body2Mixin } from '@diogop_96/portfolio-component-library';

import { sectionMixin } from '@/styles';

export const SectionContainer = styled.section`
  ${sectionMixin}
`;

export const Title = styled.h3`
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const TechContainer = styled.span`
  ${body2Mixin}

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};

  & > *:first-child {
    margin-right: 5px !important;
  }
`;
