import Link from 'next/link';
import { EditorialShell } from '@/components/editorial-shell';
import { siteUrl } from '@/lib/site';
import styles from './page.module.css';

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Vinay Kumar L',
  jobTitle: 'Software Engineer',
  url: siteUrl,
  sameAs: [
    'https://github.com/vinaaaaaykumaaaaar',
    'https://linkedin.com/in/vinay-kumar-l',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <EditorialShell>
        <div className={styles.intro}>
          <h1>I turn first principles into software that scales.</h1>

          <p>
            I&apos;m Vinay Kumar L, a software engineer focused on reliable
            systems, modern tools, and thoughtful human‑AI collaboration.
          </p>

          <p>
            Explore my{' '}
            <Link href="/skills" className={styles.task}>
              skills
            </Link>, read{' '}
            <Link href="/blog" className={styles.task}>
              documented insights &amp; learnings
            </Link>, view my{' '}
            <Link href="/resume" className={styles.task}>
              résumé
            </Link>, or connect with me on{' '}
            <a
              href="https://github.com/vinaaaaaykumaaaaar"
              className={styles.task}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{' '}
            and{' '}
            <a
              href="https://linkedin.com/in/vinay-kumar-l"
              className={styles.task}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>

          <Link href="/blog" className={styles.cta}>
            <span className={styles.ctaLabel}>Read the work</span>
            <span className={styles.ctaChevron} aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9.5 18.25 15.75 12 9.5 5.75" />
              </svg>
            </span>
          </Link>
        </div>
      </EditorialShell>
    </>
  );
}
