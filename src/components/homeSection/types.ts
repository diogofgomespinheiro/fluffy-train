import { ImageProps } from '@/shared';

export type SocialLink = {
  name: string;
  icon: ImageProps;
  url: string;
};

export type HomeSectionProps = {
  title: string;
  subTitle: string;
  sideImage: ImageProps;
  socialLinks: SocialLink[];
};
