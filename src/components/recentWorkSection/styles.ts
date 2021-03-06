import styled from 'styled-components';
import { deviceQueries } from '@diogop_96/portfolio-component-library';

import { sectionMixin } from '@/styles';

export const MainContainer = styled.section`
  ${sectionMixin}
  margin-top: 100px;

  @media screen and (${deviceQueries.tablet.min}) {
    margin-top: 150px;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 350px));
  gap: 40px;
  justify-content: center;

  width: 100%;
  margin: 40px 0;
  cursor: pointer;
`;

export const ProjectWrapper = styled.div`
  height: 280px;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
`;

export const Project = styled.div<{ backgroundImage: string }>`
  background: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  border-radius: 8px;

  transition: transform 0.5s;
  -webkit-transition: -webkit-transform 0.5s;

  &:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`;
