import ProjectsList from "./ProjectList";

export default function Projects() {
    return (
            <div id="projects" className="container m-auto min-h-screen">
                <h1 className="text-5xl text-center">Projects</h1>
                <ProjectsList />
            </div>
    );
}