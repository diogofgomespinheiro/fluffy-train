import { HeaderMenuItem, ButtonProps } from '@/shared';

export type HeaderProps = {
  menuItems: HeaderMenuItem[];
  enableLinkObserver?: boolean;
  linksQuery?: string;
  resume: ButtonProps;
};
