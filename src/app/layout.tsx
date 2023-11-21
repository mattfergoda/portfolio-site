// app/layout.tsx
import Navigation from "@/_components/Navigation";
import {Providers} from "./providers";
import './globals.css'

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}