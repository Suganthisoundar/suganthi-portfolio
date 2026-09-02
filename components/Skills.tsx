const skills = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "REST APIs",
      "PHP",
      "CodeIgniter",
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
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 lg:px-20">

      <div className="max-w-6xl mx-auto">

        <p className="text-blue-600 text-sm font-medium">
          TECHNICAL SKILLS
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Technologies I Work With
        </h2>


        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="border rounded-2xl p-6"
            >

              <h3 className="text-xl font-semibold">
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-3 mt-5">

                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full border text-sm"
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