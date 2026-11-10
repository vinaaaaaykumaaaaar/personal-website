import Link from 'next/link';
import type { ReactNode } from 'react';
import styles from './editorial-shell.module.css';

type EditorialShellProps = {
  children: ReactNode;
};

export function EditorialShell({ children }: EditorialShellProps) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link
          href="/"
          className={styles.homeLink}
          aria-label="Vinay Kumar L home"
        >
          {/* The reference mark is intentionally kept unchanged. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://instinct.com/redesign/stickman.png"
            alt=""
            width="135"
            height="355"
            className={styles.mark}
          />
        </Link>
      </header>

      <main id="main-content" tabIndex={-1} className={styles.main}>
        {children}

        <footer className={styles.footer}>
          <p>Copyright © 2026 Vinay Kumar L</p>
        </footer>
      </main>
    </div>
  );
}
