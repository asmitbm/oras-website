import React from 'react';
import styles from './styles.module.css';

const features = [
    {
        title: 'Artifact Reference',
        content: (
            <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </>
        ),
    },
    {
        title: 'Manage OCI artifact and manifest',
        content: (
            <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </>
        ),
    },
    {
        title: 'Manage registry and repository',
        content: (
            <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            </>
        ),
    },
];

export default function Features() {
    return (
        <div className={[styles.features, styles.section_padding].join(' ')}>
            {features.map(({ title, content }, index) => (
                <div className={styles.feature_card} key={index}>
                    <div />
                    <h3>{title}</h3>
                    <p className={styles.info}>{content}</p>
                </div>
            ))}
        </div>
    );
}
