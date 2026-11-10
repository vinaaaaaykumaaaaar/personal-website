'use client';

import { useEffect } from 'react';
import { EditorialShell } from '@/components/editorial-shell';
import styles from './route-state.module.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EditorialShell>
      <section className={styles.state}>
        <p className={styles.label}>Error</p>
        <h1>Something went wrong</h1>
        <p>
          Something broke on our end, not yours. Try again, or head back home.
        </p>
        <button type="button" onClick={reset} className={styles.action}>
          Try again
          <span className={styles.chevron} aria-hidden="true">
            ›
          </span>
        </button>
      </section>
    </EditorialShell>
  );
}
