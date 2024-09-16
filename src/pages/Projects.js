const projects = [
    {
      title: "Project One",
      description: "This is the first project",
    },
    {
      title: "Project Two",
      description: "This is the second project",
    },
    // Add more projects here
  ];
  
  const Projects = () => {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Projects</h1>
        <ul>
          {projects.map((project, index) => (
            <li key={index} className="border p-4 mt-4">
              <h2 className="text-2xl">{project.title}</h2>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Projects;
  