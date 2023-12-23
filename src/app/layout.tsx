// app/layout.tsx
import Navigation from "@/_components/Navbar/Navigation";
import {Providers} from "./providers";
import './globals.css'
import { Open_Sans } from 'next/font/google';
import type { Metadata } from 'next'


const openSansFont = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: "Matt Fergoda",
  description: "A full-stack software engineer based in Seattle.",
}

/** Root component */

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${openSansFont.className}`}>
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}