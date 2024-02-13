const PROJECTS = [
  {
    title: "AI-powered Image Search Engine",
    description: "A RESTful API for quickly searching 25,000 images based on"
      + " their content using AI. Fast, open source, and containerized for"
      + " easy deployment as a microservice.",
    src: "/projects/simsearch.png",
    technologies: ["Vector Store", "OpenAI", "Fast API", "AWS", "React"],
    links: [
      {
        title: "Demo",
        url: "https://demo.simsearch.mattfergoda.me/"
      },
      {
        title: "Blog Post",
        url: "https://dev.to/mattfergoda/ai-powered-image-search-with-clip-pgvector-and-fast-api-1f1d"
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