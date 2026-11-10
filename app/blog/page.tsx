import type { Metadata } from 'next';
import Link from 'next/link';
import { EditorialShell } from '@/components/editorial-shell';
import { blogPosts } from '@/lib/posts';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Notes on software engineering, system architecture, and building with AI — documented so the learning compounds.',
};

// Statically rendered, revalidated at most hourly (ISR) so new writing can
// appear without a redeploy.
export const revalidate = 3600;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default function BlogPage() {
  return (
    <EditorialShell>
      <div className={styles.indexContent}>
        <header className={styles.intro}>
          <h1>Documented Insights &amp; Learnings</h1>
          <p>
            What I&rsquo;m learning about software engineering, system
            architecture, and building with AI — written down so it compounds.
          </p>
        </header>

        <ol className={styles.postList}>
          {blogPosts.map((post) => (
            <li key={post.id} className={styles.postRow}>
              <article>
                <div className={styles.meta}>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className={styles.postTitle}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className={styles.excerpt}>{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className={styles.readLink}
                  aria-label={`Read ${post.title}`}
                >
                  Read article&nbsp;›
                </Link>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </EditorialShell>
  );
}
