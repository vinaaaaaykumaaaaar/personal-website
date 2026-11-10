import { EditorialShell } from '@/components/editorial-shell';
import styles from './skills-loading.module.css';

export function SkillsLoading() {
  return (
    <EditorialShell>
      <div
        className={styles.content}
        role="status"
        aria-live="polite"
        aria-busy="true"
        aria-label="Loading skills"
      >
        <div className={styles.intro}>
          <div className={`${styles.line} ${styles.heading}`} />
          <div className={styles.copyLines}>
            <div className={`${styles.line} ${styles.copy}`} />
            <div className={`${styles.line} ${styles.copyShort}`} />
          </div>
        </div>

        <section className={styles.section}>
          <div className={`${styles.line} ${styles.sectionHeading}`} />
          <div className={styles.skillGrid}>
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className={styles.skillGroup}>
                <div className={`${styles.line} ${styles.label}`} />
                <div className={`${styles.line} ${styles.skillCopy}`} />
                <div className={`${styles.line} ${styles.skillCopyShort}`} />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={`${styles.line} ${styles.sectionHeadingWide}`} />
          <div className={styles.principles}>
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className={styles.principle}>
                <div className={`${styles.line} ${styles.principleTitle}`} />
                <div className={styles.copyLines}>
                  <div className={`${styles.line} ${styles.principleCopy}`} />
                  <div className={`${styles.line} ${styles.principleCopyShort}`} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </EditorialShell>
  );
}
