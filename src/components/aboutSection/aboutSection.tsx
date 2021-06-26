import * as React from 'react';
import {
  Tabs,
  Tab,
  TabsList,
  TabsPanels,
  TabsPanel,
  SimpleTabsPanelContent
} from '@diogop_96/portfolio-component-library';

import { AboutSectionProps } from './types';

import * as S from './styles';

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  description,
  qualifications
}) => {
  const tabsListItems = qualifications.map(qualification => (
    <Tab key={`${qualification.title}-list-item`}>{qualification.title}</Tab>
  ));

  const tabsPanelsItems = qualifications.map(qualification => (
    <TabsPanel key={`${qualification.title}-panel-item`}>
      <SimpleTabsPanelContent items={qualification.items} />
    </TabsPanel>
  ));

  return (
    <S.SectionContainer id="about">
      <S.PersonalInfoContainer>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.PersonalInfoContainer>
      <S.TabsWrapper>
        <Tabs>
          <TabsList>{tabsListItems}</TabsList>
          <TabsPanels>{tabsPanelsItems}</TabsPanels>
        </Tabs>
      </S.TabsWrapper>
    </S.SectionContainer>
  );
};

export default AboutSection;
