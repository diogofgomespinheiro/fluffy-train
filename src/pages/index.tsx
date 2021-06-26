import * as React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';

import Layout from '@/components/layout';
import HomeSection from '@/components/homeSection';
import AboutSection from '@/components/aboutSection';
import RecentWorkSection from '@/components/recentWorkSection';
import ContactSection from '@/components/contactSection';

import { getLandingPageContent } from '@/lib';
import { LandingPageProps } from '@/shared';

const LandingPage = ({
  homeSectionProps,
  aboutSectionProps,
  contactSectionProps,
  navbar,
  seoMetaTags
}: LandingPageProps) => {
  return (
    <Layout
      headerMenuItemSelectedIndex={navbar.selectedIndex}
      headerMenuItems={navbar.items}
      enableLinkObserver
      linksQuery="#home, #about, #projects, #recent-work, #contact"
    >
      <Head>{renderMetaTags(seoMetaTags)}</Head>
      <HomeSection {...homeSectionProps} />
      <AboutSection {...aboutSectionProps} />
      <RecentWorkSection />
      <ContactSection {...contactSectionProps} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<LandingPageProps> = async ({
  preview = false
}) => {
  const props = await getLandingPageContent(preview);

  return {
    props
  };
};

export default LandingPage;
