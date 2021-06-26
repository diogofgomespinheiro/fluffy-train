import type { SeoMetaTagType } from 'react-datocms';

import { HeaderMenuItem } from './header.types';
import { HomeSectionProps } from '@/components/homeSection';
import { AboutSectionProps } from '@/components/aboutSection';
import { ContactSectionProps } from '@/components/contactSection';

export type LandingPageProps = {
  seoMetaTags: SeoMetaTagType[];
  navbar: {
    selectedIndex: number;
    items: HeaderMenuItem[];
  };
  homeSectionProps: HomeSectionProps;
  aboutSectionProps: AboutSectionProps;
  contactSectionProps: ContactSectionProps;
};
