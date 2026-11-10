import type { Metadata } from 'next';
import { EditorialShell } from '@/components/editorial-shell';
import styles from './skills.module.css';

export const metadata: Metadata = {
  title: 'Skills',
  description:
    'Frontend, backend, and platform toolkit, plus the core engineering principles I build by.',
};

const skillGroups = [
  {
    title: 'Frontend Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Docker', 'AWS', 'Vercel', 'Git', 'GitHub Actions'],
  },
] as const;

const principles = [
  {
    title: 'First-Principles Thinking',
    description:
      'Breaking down complex problems to fundamental components, enabling innovative solutions and avoiding unnecessary complexity.',
  },
  {
    title: 'Human-AI Collaboration',
    description:
      'Using AI to move faster on the mechanical work while keeping every architectural decision — and the judgment behind it — firmly human.',
  },
  {
    title: 'Scalable Architecture',
    description:
      'Designing systems that grow gracefully with user needs, team size, and business requirements.',
  },
  {
    title: 'Focus on What Matters',
    description:
      'Prioritizing features and solutions that deliver real value, avoiding over-engineering and feature bloat.',
  },
] as const;

export default function SkillsPage() {
  return (
    <EditorialShell>
      <div className={styles.content}>
        <header className={styles.intro}>
          <h1>Tools, systems, and sound judgment.</h1>
          <p>
            The tools I reach for, and the principles I hold them to. Chosen
            because they ship reliable, scalable software — not because they
            trend.
          </p>
        </header>

        <section className={styles.section} aria-labelledby="toolkit-heading">
          <h2 id="toolkit-heading">Toolkit</h2>
          <div className={styles.skillGrid}>
            {skillGroups.map((group) => (
              <article key={group.title} className={styles.skillGroup}>
                <h3>{group.title}</h3>
                <p>{group.skills.join(', ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="principles-heading">
          <h2 id="principles-heading">Core Principles</h2>
          <div className={styles.principleList}>
            {principles.map((principle) => (
              <article key={principle.title} className={styles.principle}>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </EditorialShell>
  );
}
