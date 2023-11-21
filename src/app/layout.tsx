// app/layout.tsx
import Navigation from "@/_components/Navigation";
import {Providers} from "./providers";
import './globals.css'
import { Syne_Mono } from 'next/font/google';

const syneFont = Syne_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-syne',
});


export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${syneFont.variable}`}>
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}