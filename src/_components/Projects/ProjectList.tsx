import ProjectCard from "./ProjectCard";
import ProjectsList from "./ProjectList";

import PROJECTS from "@/_lib/projects";

/** Presentational component for displaying projects.
 *
 * ProjectList -> ProjectCard
 */

export default function ProjectList() {
    return (
        <div id="projects" className="max-w-6xl container m-auto min-h-screen flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <h1 className="text-5xl text-center text-primary col-span-2">Projects</h1>
                    {
                        PROJECTS.map(project => <ProjectCard key={project.title} project={project} />)
                    }
            </div>
        </div>
    );
}