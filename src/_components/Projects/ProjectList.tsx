import { projectListProps } from "@/types";
import ProjectCard from "./ProjectCard";

/** Presentational component for displaying projects.
 *
 * ProjectList -> ProjectCard
 */

export default function ProjectList( { projects }: projectListProps ) {
    return (
        <div id="projects" className="max-w-5xl container m-auto min-h-screen flex items-center p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <h1 className="text-5xl text-center col-span-1 md:col-span-2 text-primary mb-3">Projects</h1>
                {
                    projects.map(project => (
                        <ProjectCard
                            key={project.title}
                            project={project} />
                    ))
                }
            </div>
        </div>
    );
}