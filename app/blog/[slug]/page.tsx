import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EditorialShell } from '@/components/editorial-shell';
import { blogPosts, getPostBySlug } from '@/lib/posts';
import { siteUrl } from '@/lib/site';
import styles from '../blog.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

// Pre-render every post at build time (SSG); revalidate hourly (ISR).
export const revalidate = 3600;
// The post set is fixed, so any slug outside generateStaticParams is a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Person', name: 'Vinay Kumar L', url: siteUrl },
    url: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <EditorialShell>
        <article className={styles.article}>
          <Link href="/blog" className={styles.backLink}>
            ‹ Back to all articles
          </Link>

          <header className={styles.articleHeader}>
            <div className={styles.meta}>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className={styles.articleTitle}>{post.title}</h1>

            <ul className={`${styles.categories} ${styles.categoryList}`}>
              {post.categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </header>

          <div
            className={styles.prose}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </EditorialShell>
    </>
  );
}
