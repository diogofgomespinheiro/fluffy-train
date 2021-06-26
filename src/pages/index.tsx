import * as React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { renderMetaTags } from 'react-datocms';

import Layout from '@/components/layout';
import RecentWorkSection from '@/components/recentWorkSection';
import ContactSection from '@/components/contactSection';

import { getLandingPageContent } from '@/lib';
import { LandingPageProps } from '@/shared';

const LandingPage = ({
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
      <RecentWorkSection />
      <ContactSection {...contactSectionProps} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<LandingPageProps> = async ({
  preview = false
}) => {
  const props = await getLandingPageContent(preview);

  console.log(props);

  return {
    props
  };
};

export default LandingPage;
