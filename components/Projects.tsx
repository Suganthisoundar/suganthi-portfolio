const projects = [
  {
    title: "Subscription-Based Web Platform",
    description:
      "A full-stack subscription platform with frontend, backend APIs, database integration, payment workflow, and AWS deployment.",
    tech: [
      "Next.js",
      "React.js",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "AWS",
    ],
    live: "#",
    github: "#",
  },

  {
    title: "WooCommerce E-Commerce Website",
    description:
      "Responsive e-commerce website with product management, shopping cart, checkout flow, payment integration, and WordPress customization.",
    tech: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    live: "#",
    github: "#",
  },

  {
    title: "Responsive Web Application",
    description:
      "Modern responsive web application with reusable React components and REST API integration.",
    tech: [
      "React.js",
      "JavaScript",
      "REST API",
      "CSS3",
    ],
    live: "#",
    github: "#",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 lg:px-20">

      <div className="max-w-6xl mx-auto">

        <p className="text-blue-600 text-sm font-medium">
          FEATURED PROJECTS
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Projects I Have Built
        </h2>


        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                border
                rounded-2xl
                p-8
                hover:shadow-lg
                transition
              "
            >

              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>


              <p className="text-gray-600 mt-4 leading-7">
                {project.description}
              </p>


              <div className="flex flex-wrap gap-2 mt-6">

                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      border
                      rounded-full
                      px-3
                      py-1
                      text-sm
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>


              <div className="flex gap-4 mt-8">

                <a
                  href={project.live}
                  className="text-blue-600 font-medium"
                >
                  Live Demo →
                </a>

                <a
                  href={project.github}
                  className="text-blue-600 font-medium"
                >
                  GitHub →
                </a>

              </div>


            </div>
          ))}

        </div>

      </div>

    </section>
  );
}