'use client';

import { useEffect, useState } from 'react';
import ResumeFallback from './resume-fallback';
import styles from './resume-editorial.module.css';

export default function ResumeViewer() {
  const [isLoading, setIsLoading] = useState(true);
  const [showFallback, setShowFallback] = useState(false);
  const [pdfSupported, setPdfSupported] = useState(true);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      );

    if (isMobile) {
      setPdfSupported(false);
      setShowFallback(true);
      setIsLoading(false);
    }
  }, []);

  const handleIframeError = () => {
    setShowFallback(true);
    setIsLoading(false);
  };

  if (showFallback) {
    return (
      <section className={styles.fallbackFrame}>
        <div className={styles.notice} role="status">
          <span className={styles.noticeMark} aria-hidden="true">
            !
          </span>
          <p>
            PDF preview is not available on this device. You can download or
            view the resume using the links below.
          </p>
        </div>
        <ResumeFallback />
      </section>
    );
  }

  return (
    <section className={styles.viewer} aria-label="Resume preview">
      <div className={styles.viewerToolbar}>
        <span>Resume preview</span>
        <div className={styles.viewerActions}>
          <a
            href="/sample-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View full size
          </a>
          <a href="/sample-resume.pdf" download>
            Download
          </a>
        </div>
      </div>

      <div className={styles.pdfSurface}>
        {isLoading && pdfSupported && (
          <div
            className={styles.loadingFrame}
            aria-live="polite"
            aria-label="Loading resume preview"
          >
            <span className={styles.spinner} aria-hidden="true" />
          </div>
        )}

        {pdfSupported && (
          <iframe
            src="/sample-resume.pdf"
            className={styles.pdfFrame}
            title="Resume PDF"
            onLoad={() => setIsLoading(false)}
            onError={handleIframeError}
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        )}
      </div>

      {!isLoading && pdfSupported && (
        <p className={styles.recovery}>
          If the PDF doesn&apos;t display properly, you can{' '}
          <button type="button" onClick={() => setShowFallback(true)}>
            view the resume content
          </button>{' '}
          or{' '}
          <a href="/sample-resume.pdf" download>
            download it directly
          </a>
          .
        </p>
      )}
    </section>
  );
}
