import About from '@/_components/About/About';
import Hero from '@/_components/Hero';
import Projects from '@/_components/Projects/Projects';
import Image from 'next/image'

/** Landing page presentational component
 *
 */

export default function Home() {
  return (
    <main className="text-foreground bg-background">
      <Hero />
      <About />
      <Projects />
    </main>
  )
}
