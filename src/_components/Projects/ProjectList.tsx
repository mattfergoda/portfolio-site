import ProjectCard from "./ProjectCard";

interface projectInterface {
    title: string,
    description: string,
    src: string;
}

interface projectListProps {
    projects: Array<projectInterface>;
}

/** Presentational component for displaying projects.
 *
 * Projects -> ProjectsList -> ProjectCard
 */

export default function ProjectsList({ projects }: projectListProps) {
    return (
        <div className="container m-auto min-h-screen flex items-center my-8">
        <div className="max-w-[900px]">
            {
                projects.map(project => <ProjectCard project={project} />)
            }
        </div>
        </div>
    );
}