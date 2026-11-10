import { EditorialShell } from '@/components/editorial-shell';
import styles from '@/app/blog/blog.module.css';

export function BlogLoading() {
  return (
    <EditorialShell>
      <div
        className={styles.loadingBlock}
        role="status"
        aria-live="polite"
        aria-label="Loading articles"
        aria-busy="true"
      >
        <div className={styles.loadingIntro}>
          <div
            className={`${styles.loadingLine} ${styles.loadingLineTitle}`}
          />
          <div
            className={`${styles.loadingLine} ${styles.loadingLineBody}`}
          />
          <div
            className={`${styles.loadingLine} ${styles.loadingLineBodyShort}`}
          />
        </div>

        <div className={styles.loadingList}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div className={styles.loadingRow} key={index}>
              <div
                className={`${styles.loadingLine} ${styles.loadingLineSmall}`}
              />
              <div
                className={`${styles.loadingLine} ${styles.loadingLineTitle}`}
              />
              <div
                className={`${styles.loadingLine} ${styles.loadingLineBody}`}
              />
              <div
                className={`${styles.loadingLine} ${styles.loadingLineBodyShort}`}
              />
            </div>
          ))}
        </div>
      </div>
    </EditorialShell>
  );
}
