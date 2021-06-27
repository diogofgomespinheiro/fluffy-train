import type { SeoMetaTagType } from 'react-datocms';

import { HeaderMenuItem } from './header.types';
import { ButtonProps } from './button.types';
import { HomeSectionProps } from '@/components/homeSection';
import { AboutSectionProps } from '@/components/aboutSection';
import { ProjectsSectionProps } from '@/components/projectsSection';
import { ContactSectionProps } from '@/components/contactSection';

export type LandingPageProps = {
  seoMetaTags: SeoMetaTagType[];
  navbar: {
    selectedIndex: number;
    items: HeaderMenuItem[];
    resume: ButtonProps;
  };
  homeSectionProps: HomeSectionProps;
  aboutSectionProps: AboutSectionProps;
  projectsSectionProps: ProjectsSectionProps;
  contactSectionProps: ContactSectionProps;
};
