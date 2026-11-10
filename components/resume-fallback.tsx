'use client';

import styles from './resume-editorial.module.css';

export default function ResumeFallback() {
  return (
    <div className={styles.fallbackActions} aria-label="Resume file options">
      <a href="/sample-resume.pdf" download>
        Download PDF
      </a>
      <a
        href="/sample-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open PDF
      </a>
    </div>
  );
}
