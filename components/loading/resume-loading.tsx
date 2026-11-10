import { EditorialShell } from '@/components/editorial-shell';
import styles from '@/components/resume-editorial.module.css';

export function ResumeLoading() {
  return (
    <EditorialShell>
      <div
        className={styles.loadingPage}
        role="status"
        aria-live="polite"
        aria-label="Loading resume"
        aria-busy="true"
      >
        <div className={styles.loadingIntro}>
          <span className={styles.skeletonTitle} />
          <span className={styles.skeletonLine} />
          <span className={styles.skeletonAction} />
        </div>
        <span className={styles.skeletonViewer} />
      </div>
    </EditorialShell>
  );
}
