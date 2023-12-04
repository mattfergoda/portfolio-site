const PROJECTS = [
  {
    title: "Jobly",
    description: "An application for viewing companies and job postings with user auth. An Express backend and a React frontend with Bootstrap styling, including some Reactstrap styled components.",
    src: "/projects/jobly.png",
    technologies: ["React", "Express", "PostgreSQL", "Bootstrap"],
    links: [
      {
        title: "Demo",
        url: "https://jobly.demo.mattfergoda.me"
      },
      {
        title: "Frontend Code",
        url: "https://github.com/mattfergoda/jobly-frontend"
      },
      {
        title: "Backend Code",
        url: "https://github.com/mattfergoda/express-jobly"
      },
    ]
  },
  {
    title: "Pixly",
    description: "A photo storing and editing application with a Flask backend"
      + " and React frontend. Photos are searchable by EXIF metadata.",
    src: "/projects/pixly.png",
    technologies: ["React", "Flask", "PostgreSQL", "SQLAlchemy", "Bootstrap", "Reactstrap", "AWS S3"],
    links: [
      {
        title: "Demo",
        url: "https://pixly.demo.mattfergoda.me"
      },
      {
        title: "Frontend Code",
        url: "https://github.com/mattfergoda/pixly-frontend"
      },
      {
        title: "Backend Code",
        url: "https://github.com/mattfergoda/pixly-jobly"
      },
    ]
  },
  {
    title: "Portfolio Site",
    description: "A mobile-friendly portfolio site for showcasing my software"
      + " development experience and projects. Allows for light and dark mode"
      + " theme switching.",
    src: "/projects/portfolio.png",
    technologies: ["NextJS", "Next UI", "Tailwind CSS"],
    links: [
      {
        title: "Code",
        url: "https://github.com/mattfergoda/pixly-frontend"
      }
    ]
  },
]

export default PROJECTS;