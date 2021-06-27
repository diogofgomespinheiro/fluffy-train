import { ReactNode } from 'react';

import { ButtonProps, HeaderMenuItem } from '@/shared';

export type LayoutProps = {
  preview?: boolean;
  children: ReactNode;
  headerMenuItemSelectedIndex: number;
  headerMenuItems: HeaderMenuItem[];
  resume: ButtonProps;
  enableLinkObserver?: boolean;
  linksQuery?: string;
};
