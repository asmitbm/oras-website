import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Header from '@site/src/components/Header';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HowORASWorks from '@site/src/components/HowORASWorks';
import Workflow from '@site/src/components/Workflow';
import CommunityLogos from '../components/CommunityLogos';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <main>
        <Header />
        <CommunityLogos />
        <HowORASWorks />
        <Workflow />
        {/*<HomepageFeatures />*/}
      </main>
    </Layout>
  );
}
