interface linkInterface {
  title: string,
  url: string;
}

interface projectInterface {
    title: string,
    description: string,
    src: string,
    technologies: Array<string>,
    links: Array<linkInterface>;
}

export interface projectCardProps {
  project: projectInterface;
}

export interface projectListProps {
  projects: Array<projectInterface>
}

export interface LightDarkButtonProps {
  handleClick: () => void;
  dark: boolean;
}