import type { Metadata } from 'next';
import { EditorialShell } from '@/components/editorial-shell';
import ResumeViewer from '@/components/resume-viewer';
import styles from '@/components/resume-editorial.module.css';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Vinay Kumar L — the systems I’ve shipped, the roles I’ve held, and how to reach me.',
};

export default function ResumePage() {
  return (
    <EditorialShell>
      <section className={styles.resumePage}>
        <header className={styles.intro}>
          <div className={styles.introCopy}>
            <h1>Resume</h1>
            <p>
              The work, the shipped systems, and the people who&rsquo;ll vouch
              for both.
            </p>
          </div>

          <a className={styles.brushLink} href="/sample-resume.pdf" download>
            <span>Download PDF</span>
            <span className={styles.chevron} aria-hidden="true">
              ↓
            </span>
          </a>
        </header>

        <ResumeViewer />
      </section>
    </EditorialShell>
  );
}
