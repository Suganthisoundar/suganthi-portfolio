const skills = [
  {
    title: "Full Stack Development",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "REST APIs",
      "TypeScript",
      "Prisma ORM",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "PHP",
      "CodeIgniter",
      "API Integration",
      "Authentication",
    ],
  },
  {
    title: "Database & Cloud",
    items: [
      "MySQL",
      "PostgreSQL",
      "Amazon RDS",
      "AWS EC2",
      "AWS S3",
      "Deployment",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "CMS & Tools",
    items: [
      "WordPress",
      "WooCommerce",
      "Git",
      "GitHub",
      "Postman",
      "Figma",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-8 py-16 lg:px-20">

      <div className="max-w-6xl mx-auto">

        <p className="text-blue-600 text-sm font-medium">
          TECHNICAL SKILLS
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Technologies I Work With
        </h2>


        <div className="grid gap-6 mt-10 sm:grid-cols-2 xl:grid-cols-3">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="h-full rounded-2xl border border-black/10 bg-white p-6"
            >

              <h3 className="text-lg font-semibold">
                {skill.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2.5">

                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 px-3 py-1.5 text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
