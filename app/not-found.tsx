import Link from 'next/link';
import { EditorialShell } from '@/components/editorial-shell';
import styles from './route-state.module.css';

export default function NotFound() {
  return (
    <EditorialShell>
      <section className={styles.state}>
        <p className={styles.label}>404</p>
        <h1>Page not found</h1>
        <p>
          That page doesn&rsquo;t exist — or it moved. Let&rsquo;s get you back
          on track.
        </p>
        <Link href="/" className={styles.action}>
          Back home
          <span className={styles.chevron} aria-hidden="true">
            ›
          </span>
        </Link>
      </section>
    </EditorialShell>
  );
}
