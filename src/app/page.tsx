import About from '@/_components/About/About';
import Footer from '@/_components/Footer';
import Hero from '@/_components/Hero';
import ProjectList from '@/_components/Projects/ProjectList';
import PROJECTS from '@/_lib/projects';

/** Main site page logical component.
 *
 * Home -> { Hero, About, ProjectList, Footer }
 */

export default function Home() {
  return (
    <main className="text-foreground bg-background">
      <Hero />
      <About />
      <ProjectList projects={PROJECTS} />
      <Footer />
    </main>
  )
}
