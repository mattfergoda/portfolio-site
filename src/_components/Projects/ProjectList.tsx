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
        <div className="flex justify-center my-8">
        <div className="max-w-[900px] grid grid-cols-1 md:grid-cols-2 gap-8">
            {
                projects.map(project => <ProjectCard project={project} />)
            }
        </div>
        </div>
    );
}