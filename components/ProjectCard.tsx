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

<div className="relative w-full h-40 bg-gray-50">
  <Image
    src={project.image}
    alt={project.title}
    fill
    unoptimized
    className="object-contain"
  />
</div>


      <div className="p-6">

       <h3 className="text-lg font-semibold">
          {project.title}
        </h3>


        <p className="text-sm text-gray-500 mt-1">
          {project.category}
        </p>


        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-600 font-medium"
        >
          Visit Website →
        </a>

      </div>

    </div>
  );
}
