import type { Metadata, Viewport } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Fuss from '@/components/Fuss';

export const metadata: Metadata = {
  title: {
    default: 'Mobiler MakerSpace',
    template: '%s · Mobiler MakerSpace',
  },
  description:
    'Eine Making-Woche, die ins Klassenzimmer kommt: vier Boxen, ein Kartenset, sieben Halbtage. Ein Projekt der Pädagogischen Hochschule Thurgau.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1f2352',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800&family=Nunito+Sans:wght@400;600;700&display=swap"
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Fuss />
      </body>
    </html>
  );
}
