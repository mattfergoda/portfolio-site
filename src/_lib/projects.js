const PROJECTS = [
  {
    title: "AI-powered Image Search Engine",
    description: "A RESTful API for quickly searching 25,000 images based on"
      + " their content using AI. Fast, open source, and containerized for"
      + " easy deployment as a microservice.",
    src: "/projects/simsearch.png",
    technologies: ["Vector Store", "OpenAI", "Fast API", "AWS"],
    links: [
      {
        title: "Demo",
        url: "https://demo.simsearch.mattfergoda.me/"
      },
      {
        title: "Frontend Code",
        url: "https://github.com/mattfergoda/semantic-image-search-frontend"
      },
      {
        title: "Backend Code",
        url: "https://github.com/mattfergoda/semantic-image-search"
      },
    ]
  },
  {
    title: "Jobly",
    description: "An application for viewing companies and job postings with"
      + " user auth. An Express backend and a React frontend with Bootstrap"
      + " styling, including some Reactstrap styled components.",
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
    title: "Portfolio Site",
    description: "A mobile-friendly portfolio site for showcasing my software"
      + " development experience and projects. Allows for light and dark mode"
      + " theme switching.",
    src: "/projects/portfolio.png",
    technologies: ["TypeScript", "NextJS", "Next UI", "Tailwind CSS"],
    links: [
      {
        title: "Code",
        url: "https://github.com/mattfergoda/portfolio-site"
      }
    ]
  },
]

export default PROJECTS;