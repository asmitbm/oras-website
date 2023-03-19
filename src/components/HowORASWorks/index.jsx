import React from 'react';
import styles from './styles.module.css';

export default function HowORASWorks() {
    return (
        <div className={[styles.how_oras_works, styles.section_padding].join(' ')}>
            <div className={styles.how_oras_works_heading}>
                <h1 className="gradient_text">How ORAS Works?</h1>
            </div>
            <div className={styles.how_oras_works_content}>
                <p> ORAS is the de facto tool for working with OCI Artifacts.
                    It treats media types as a critical piece of the puzzle.
                    Container images are never assumed to be the artifact in question.
                </p>
            </div>
            <div className={styles.how_oras_works_video}>
                <iframe
                    src="https://www.youtube.com/embed/lT2ZMRJrQsU"
                    title="Distributing Supply Chain Artifacts with OCI & ORAS Artifacts - Steve Lasker, Microsoft"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    );
}