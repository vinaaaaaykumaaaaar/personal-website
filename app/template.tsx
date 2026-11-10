import type React from 'react';

// Keep route changes visually stable and leave content readable before
// client-side JavaScript initializes.
export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
