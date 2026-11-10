import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SocialLinks } from '@/components/social-links';

describe('SocialLinks', () => {
  it('renders GitHub and LinkedIn links with correct hrefs', () => {
    render(<SocialLinks />);

    const github = screen.getByRole('link', { name: /github/i });
    const linkedin = screen.getByRole('link', { name: /linkedin/i });

    expect(github).toHaveAttribute(
      'href',
      'https://github.com/vinaaaaaykumaaaaar'
    );
    expect(linkedin).toHaveAttribute(
      'href',
      'https://linkedin.com/in/vinay-kumar-l'
    );
  });

  it('opens external links safely in a new tab', () => {
    render(<SocialLinks />);
    for (const link of screen.getAllByRole('link')) {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
    }
  });
});
