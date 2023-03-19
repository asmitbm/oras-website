import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Header from '../components/Header';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HowORASWorks from '../components/HowORASWorks';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <main>
        <Header />
        <HowORASWorks />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
