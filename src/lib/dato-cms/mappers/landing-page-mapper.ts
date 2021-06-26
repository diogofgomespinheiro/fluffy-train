import { HeaderMenuItem, LandingPageProps } from '@/shared';
import { ContactSectionProps } from '@/components/contactSection';

export class LandingPagePropsMapper {
  data: any;
  props: LandingPageProps;

  constructor(data: any) {
    this.data = data;
    this.props = {} as LandingPageProps;
  }

  public mapSeoProps(): this {
    const { seo } = this.data.landingPage;
    const concatenatedSeo = seo.concat(this.data.site.favicon);

    Object.assign(this.props, { seoMetaTags: concatenatedSeo });
    return this;
  }

  public mapHeaderProps(): this {
    const { navbarSelectedItemIndex, navbarItems } = this.data.landingPage;

    const mappedNavbarItems: HeaderMenuItem[] = navbarItems.map(
      (item: Record<string, unknown>) => ({
        id: item.pageId,
        label: item.label,
        type: item.actionType,
        route: item.route,
        spy: item.spy,
        offset: item.offset
      })
    );

    Object.assign(this.props, {
      navbar: {
        selectedIndex: navbarSelectedItemIndex,
        items: mappedNavbarItems
      }
    });
    return this;
  }

  public mapContactSectionProps(): this {
    const { title, description, buttons } = this.data.contactSection;

    const contactSectionProps: ContactSectionProps = {
      title,
      description,
      button: buttons[0]
    };

    Object.assign(this.props, { contactSectionProps });
    return this;
  }

  public getProps(): LandingPageProps {
    return this.props;
  }
}
