import * as React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { Button } from '@diogop_96/portfolio-component-library';

import { BehanceProject } from '@/shared';

import * as S from './styles';

const fetcher = async url => {
  const { data, status } = await axios.get(url);

  if (status !== 200) {
    throw new Error(data.message);
  }

  return data;
};

const RecentWorkSection = () => {
  const { data, error } = useSWR<BehanceProject[]>(
    `/api/behance/projects`,
    fetcher
  );

  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <S.MainContainer id="recent-work">
      <S.Title>Recent Work</S.Title>
      <S.ProjectsGrid>
        {data &&
          data.map(project => (
            <S.ProjectWrapper key={project.url}>
              <S.Project
                onClick={() => handleClick(project.url)}
                backgroundImage={project.imageSrc}
              ></S.Project>
            </S.ProjectWrapper>
          ))}
      </S.ProjectsGrid>
      <Button
        onClick={() =>
          handleClick('https://www.behance.net/ritaaaqueiros/projects')
        }
      >
        Visit my Behancé
      </Button>
    </S.MainContainer>
  );
};

export default RecentWorkSection;
