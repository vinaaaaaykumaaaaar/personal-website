import { GithubIcon, LinkedinIcon } from '@/components/icons';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/vinaaaaaykumaaaaar',
    Icon: GithubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/vinay-kumar-l',
    Icon: LinkedinIcon,
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 min-w-44 items-center justify-center gap-2.5 rounded-full border border-border bg-transparent px-5 text-base font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Icon className="h-[18px] w-[18px]" />
          {label}
        </a>
      ))}
    </div>
  );
}
