import About from '@/_components/About/About';
import Hero from '@/_components/Hero';
import ProjectList from '@/_components/Projects/ProjectList';
import Image from 'next/image'

/** Landing page presentational component
 *
 */

export default function Home() {
  return (
    <main className="text-foreground bg-background">
      <Hero />
      <About />
      <ProjectList />
    </main>
  )
}
