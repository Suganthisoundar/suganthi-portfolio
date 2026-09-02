import Image from "next/image";

type Project = {
  title: string;
  category: string;
  image: string;
  link: string;
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="border rounded-2xl overflow-hidden hover:shadow-lg transition">

      <div className="relative h-56 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>


      <div className="p-6">

        <h3 className="text-xl font-semibold">
          {project.title}
        </h3>


        <p className="text-sm text-gray-500 mt-2">
          {project.category}
        </p>


        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 text-blue-600 font-medium"
        >
          Visit Website →
        </a>

      </div>

    </div>
  );
}