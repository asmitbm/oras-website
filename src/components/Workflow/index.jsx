import React from 'react';
import ORASWorkflow from '@site/static/img/oras_workflow.svg';
import styles from './styles.module.css';

export default function Workflow() {
    return (
        <div className={[styles.workflow, styles.section_padding].join(' ')}>
            <div className={styles.workflow_image}>
                <ORASWorkflow title="ORAS Workflow" width="100%" />
            </div>
        </div>
    );
}