import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="mb-20">
      <h2 className="text-3xl font-bold mb-6">My Code Lab</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.name} className="bg-[#161b22] p-4 rounded-lg shadow-md border border-[#30363d]">
            <h3 className="text-lg font-semibold mb-1 text-white">{project.name}</h3>
            <p className="text-sm text-gray-400 mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-xs mb-2">
              {project.stack.map(tech => (
                <span key={tech} title={tech} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" className="text-blue-400 text-sm hover:underline">View GitHub</a>
          </div>
        ))}
      </div>
    </section>
  )
}