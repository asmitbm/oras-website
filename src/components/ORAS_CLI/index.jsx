import React from 'react';
import styles from './styles.module.css';
import TerminalWindow from '../TerminalWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const os = [
    {
        label: 'Linux',
        value: 'linux',
        content: [
            "VERSION=\"1.0.0\"",
            "curl -LO \"https://github.com/oras-project/oras/releases/download/v${VERSION}/oras_${VERSION}_linux_amd64.tar.gz\"",
            "mkdir -p oras-install/",
            "tar -zxf oras_${VERSION}_*.tar.gz -C oras-install/",
            "sudo mv oras-install/oras /usr/local/bin/",
            "rm -rf oras_${VERSION}_*.tar.gz oras-install/",
        ],
    },
    {
        label: 'MacOS',
        value: 'macos',
        content: [
            "VERSION=\"1.0.0\"",
            "curl -LO \"https://github.com/oras-project/oras/releases/download/v${VERSION}/oras_${VERSION}_darwin_arm64.tar.gz\"",
            "mkdir -p oras-install/",
            "tar -zxf oras_${VERSION}_*.tar.gz -C oras-install/",
            "sudo mv oras-install/oras /usr/local/bin/",
            "rm -rf oras_${VERSION}_*.tar.gz oras-install/",
        ],
    },
    {
        label: 'Windows',
        value: 'windows',
        content: [
            "set VERSION=\"1.0.0\"",
            "curl.exe -sLO  \"https://github.com/oras-project/oras/releases/download/v%VERSION%/oras_%VERSION%_windows_amd64.zip\"",
            "tar.exe -xvzf oras_%VERSION%_windows_amd64.zip",
            "mkdir -p %USERPROFILE%\\bin\\",
            "copy oras.exe %USERPROFILE%\\bin\\",
            "set PATH=%USERPROFILE%\\bin\\;%PATH%",
        ],
    },
];

export default function ORASCLI() {
    return (
        <div className={[styles.orascli, styles.section_padding].join(' ')}>
            <div className={styles.orascli_content}>
                <h1>ORAS CLI</h1>
                <p>The simplest way to install ORAS with one line cmd is to use <code>brew install oras</code></p>
            </div>
            <div className={styles.orascli_cli}>
                <TerminalWindow>
                    <Tabs className={styles.orascli_cli_font}>
                        {os.map(({ label, value, content }, index) => (
                            <TabItem key={index} className={styles.orascli_cli_font} value={value} label={label}>
                                <ul className={styles.list}>
                                    {content.map((use, index) => (
                                        <li key={index}>
                                            {use}
                                        </li>
                                    ))}
                                </ul>
                            </TabItem>
                        ))}
                    </Tabs>
                </TerminalWindow>
            </div>
        </div>
    );
}