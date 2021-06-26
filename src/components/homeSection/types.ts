import { ImageProps } from '@/shared';

export type Resume = {
  url: string;
};

export type SocialLink = {
  name: string;
  icon: ImageProps;
};

export type HomeSectionProps = {
  title: string;
  subTitle: string;
  sideImage: ImageProps;
  resume: Resume;
  socialLinks: SocialLink[];
};
