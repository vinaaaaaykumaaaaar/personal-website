import { ImageResponse } from 'next/og';
import { blogPosts, getPostBySlug } from '@/lib/posts';

export const alt = 'Article — Vinay Kumar L';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

// Per-article social card with the post title, using the site's editorial palette.
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? 'Vinay Kumar L';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '68px 76px',
          background: '#ffffff',
          color: '#1f2322',
          borderTop: '10px solid #373735',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            fontSize: 22,
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          <span>Vinay Kumar L</span>
          <span style={{ textDecoration: 'underline' }}>Blog</span>
        </div>
        <div
          style={{
            display: 'flex',
            fontFamily: 'Georgia, serif',
            fontSize: 62,
            fontWeight: 600,
            lineHeight: 1.08,
            letterSpacing: '-0.025em',
            maxWidth: 1020,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            paddingTop: 22,
            borderTop: '2px solid rgba(31, 35, 34, 0.2)',
            fontSize: 22,
            fontWeight: 400,
          }}
        >
          Software Engineer · Documented insights &amp; learnings
        </div>
      </div>
    ),
    { ...size }
  );
}
