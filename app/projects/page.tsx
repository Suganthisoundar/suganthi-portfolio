import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="py-24 px-8 lg:px-20">

      <div className="max-w-6xl mx-auto">

        <p className="text-blue-600 text-sm font-medium">
          CLIENT PROJECTS
        </p>

        <h1 className="text-4xl font-bold mt-3">
          Website Projects Delivered
        </h1>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </div>

    </main>
  );
}