import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CommandPalette } from '@/components/interactive/CommandPalette';
import { TerminalDrawer } from '@/components/interactive/TerminalDrawer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-editorial',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#07090e',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Shivansh Tiwari — Software Developer & AI Enthusiast',
  description: 'Portfolio of Shivansh Tiwari. Computer Science undergraduate at USICT GGSIPU, AWS Student Builder Group Leader, and frontend engineer building thoughtful digital experiences at the intersection of software and AI.',
  keywords: [
    'Shivansh Tiwari',
    'Software Developer',
    'Frontend Engineer',
    'AI & Machine Learning',
    'AWS Student Builder Group Leader',
    'USICT GGSIPU',
    'Next.js Portfolio',
    'Web Developer India'
  ],
  authors: [{ name: 'Shivansh Tiwari', url: 'https://github.com/shivanshti97' }],
  creator: 'Shivansh Tiwari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shivanshtiwari.vercel.app',
    title: 'Shivansh Tiwari — Software Developer & AI Enthusiast',
    description: 'Building thoughtful digital experiences at the intersection of software and AI.',
    siteName: 'Shivansh Tiwari Portfolio',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/165659607?v=4',
        width: 600,
        height: 600,
        alt: 'Shivansh Tiwari',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivansh Tiwari — Software Developer & AI Enthusiast',
    description: 'Building thoughtful digital experiences at the intersection of software and AI.',
    images: ['https://avatars.githubusercontent.com/u/165659607?v=4'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} dark`}>
      <body className="min-h-screen bg-[#07090e] text-[#f1f5f9] antialiased selection:bg-amber-500/25 selection:text-amber-200">
        <div className="editorial-grid fixed inset-0 pointer-events-none z-0 opacity-40" />
        <div className="glow-ambient fixed inset-0 pointer-events-none z-0" />
        
        <Navbar />
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />

        <CommandPalette />
        <TerminalDrawer />
      </body>
    </html>
  );
}
