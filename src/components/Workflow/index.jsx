import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Workflow() {
    return (
        <div className={[styles.workflow, styles.section_padding].join(' ')}>
            <div className={styles.how_oras_works}>
                <h1 className="gradient_text">How ORAS Works?</h1>
            </div>
            <div className={styles.workflow_image}>
                <ThemedImage
                    alt="ORAS Workflow Image"
                    sources={{
                        light: useBaseUrl('/img/oras_workflow_light.svg'),
                        dark: useBaseUrl('/img/oras_workflow_dark.svg'),
                    }}
                />
            </div>
        </div>
    );
}