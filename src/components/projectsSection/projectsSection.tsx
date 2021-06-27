import * as React from 'react';
import { Image as DatoImage } from 'react-datocms';
import Image from 'next/image';
import { Button, ProjectCard } from '@diogop_96/portfolio-component-library';

import { ProjectsSectionProps } from './types';

import * as S from './styles';

const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  title,
  projects
}) => {
  const projectCardItems = projects.map(project => {
    const buttons = project.buttons.map(button => (
      <Button key={button.url} onClick={() => window.open(button.url)}>
        {button.text}
      </Button>
    ));

    const listItems = project.techs.map(tech => (
      <S.TechContainer key={`${project.title}-${tech.name}`}>
        <Image
          src={tech.image.url}
          height={tech.image.height}
          width={tech.image.width}
          alt={tech.image.alt}
        />
        {tech.name}
      </S.TechContainer>
    ));

    return (
      <ProjectCard
        key={`${project.title}-card`}
        title={project.title}
        description={project.description}
        imgComponent={<DatoImage data={project.coverImage.responsiveImage} />}
        buttons={buttons}
        listItems={listItems}
      />
    );
  });

  return (
    <S.SectionContainer id="projects">
      <S.Title>{title}</S.Title>
      <S.ProjectsContainer>{projectCardItems}</S.ProjectsContainer>
    </S.SectionContainer>
  );
};

export default ProjectsSection;
