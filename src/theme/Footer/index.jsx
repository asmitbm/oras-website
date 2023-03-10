import React from 'react';
import Footer from '@theme-original/Footer';
import styles from './styles.module.css';
import CNCF from '@site/static/img/cncf.svg';

export default function FooterWrapper(props) {
  return (
    <>
      <section className={[styles.footer_section, styles.section_padding].join(' ')}>
        <h4>We are a <a href="https://www.cncf.io/" target="_blank">Cloud Native Computing Foundation</a> Sandbox Project.</h4>
        <CNCF title="Cloud Native Computing Foundation" width="100%" />
      </section>
      <Footer {...props} />
    </>
  );
}
