import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";

import { projectCardProps } from "@/types";

/** Presentational component for an individual project
 *
 * Props:
 * - project: { title, description, src, technologies, links }
 *
 * ProjectList -> ProjectCard
 */

export default function ProjectCard({ project }: projectCardProps) {
    return (
        <Card className="mx-6 pb-4 w-75">
            <CardHeader className="pb-2 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-2xl pb-2">{project.title}</h4>
                <p className="text-md">{project.description}</p>
                <p className="text-default-500 text-sm mt-4">Technologies</p>
                <div className="Chips mt-2">
                    {
                        project.technologies.map(t => (
                            <Chip
                                className="text-small mr-2 mt-2 p-2"
                                size="sm"
                                key={t}>
                                {t}
                            </Chip>
                        ))
                    }
                </div>

            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt={`homepage of ${project.title}`}
                    className="object-cover rounded-xl w-75"
                    src={project.src}
                />
            </CardBody>
            <div className="Buttons mx-4">
                {
                    project.links.map(link => (
                        <Button
                          className="text-small mr-4 my-2 dark:text-black"
                          color="primary"
                          radius="full"
                          size="sm"
                          href={link.url}
                          target="_blank"
                          as={Link}
                          showAnchorIcon
                          key={link.title}>
                            {link.title}
                        </Button>
                    ))
                }
            </div>

        </Card>
    );
}
