import { ImageProps, ButtonProps } from '@/shared';

export type Tech = {
  name: string;
  image: ImageProps;
};

export type Project = {
  title: string;
  description: string;
  coverImage: ImageProps;
  techs: Tech[];
  buttons?: ButtonProps[];
};

export type ProjectsSectionProps = {
  title: string;
  projects: Project[];
};
