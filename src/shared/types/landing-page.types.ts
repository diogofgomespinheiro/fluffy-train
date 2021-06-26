import type { SeoMetaTagType } from 'react-datocms';

import { HeaderMenuItem } from './header.types';
import { ContactSectionProps } from '@/components/contactSection';

export type LandingPageProps = {
  seoMetaTags: SeoMetaTagType[];
  navbar: {
    selectedIndex: number;
    items: HeaderMenuItem[];
  };
  contactSectionProps: ContactSectionProps;
};
