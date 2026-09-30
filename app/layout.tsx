import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome Itzfizz — Scroll Driven Hero',
  description: 'Scroll-driven hero section animation assignment for Itzfizz Digital.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
