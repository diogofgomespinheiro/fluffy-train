import styled from 'styled-components';
import { deviceQueries } from '@diogop_96/portfolio-component-library';

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  padding-top: 72px;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (${deviceQueries.tablet.min}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const LeftSideContent = styled.div`
  width: 100%;
  margin: 40px 0 0 0;

  & > h2 {
    margin: 0 0 15px 0;
  }
`;

export const RightSideContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  & > img {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
  }

  @media screen and (${deviceQueries.tablet.min}) {
    justify-content: flex-end;
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 30px;
  width: 30px;

  background: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
