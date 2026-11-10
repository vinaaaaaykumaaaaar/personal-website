import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site';

export const alt = 'Vinay Kumar L — Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Branded social card, generated on demand in the site's editorial language.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: '64px',
          background: '#ffffff',
          color: '#1f2322',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}
        >
          Vinay Kumar L · Software Engineer
        </div>
        <div
          style={{
            display: 'flex',
            maxWidth: 920,
            fontFamily: 'Georgia',
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: '-0.03em',
            lineHeight: 1.08,
          }}
        >
          I turn first principles into software that scales.
        </div>
        <div
          style={{
            display: 'flex',
            maxWidth: 900,
            fontSize: 22,
            lineHeight: 1.3,
            color: '#585254',
          }}
        >
          {siteConfig.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
