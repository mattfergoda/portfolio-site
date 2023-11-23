import ProjectsList from "./ProjectList";

import PROJECTS from "@/_lib/projects";

export default function Projects() {
    return (
        <div id="projects" className="container m-auto min-h-screen place-content-center my-10">
            <h1 className="text-5xl text-center text-primary">Projects</h1>
            <ProjectsList projects={PROJECTS} />
        </div>
    );
}