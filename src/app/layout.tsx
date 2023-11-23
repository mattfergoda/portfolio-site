// app/layout.tsx
import Navigation from "@/_components/Navbar/Navigation";
import {Providers} from "./providers";
import './globals.css'
import { Syne_Mono, Open_Sans } from 'next/font/google';

const syneFont = Syne_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-syne',
});

const openSansFont = Open_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-open-sans',
});


export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${syneFont.variable} ${openSansFont.variable}`}>
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}