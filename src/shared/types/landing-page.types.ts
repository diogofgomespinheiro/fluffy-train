import type { SeoMetaTagType } from 'react-datocms';

import { HeaderMenuItem } from './header.types';

export type LandingPageProps = {
  seoMetaTags: SeoMetaTagType[];
  navbar: {
    selectedIndex: number;
    items: HeaderMenuItem[];
  };
};
