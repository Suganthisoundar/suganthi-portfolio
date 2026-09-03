const experiences = [
  {
    role: "Full Stack Developer",
    company: "Corona Creative Solutions Private Limited",
    period: "October 2025 - Present",
    points: [
      "Developed full-stack web applications using React.js, Next.js, Node.js, and REST APIs.",
      "Built reusable UI components and responsive interfaces.",
      "Integrated APIs and worked with MySQL, PostgreSQL, and Prisma ORM.",
      "Deployed and supported applications using AWS services.",
    ],
  },
  {
    role: "Front End Developer",
    company: "Alter Ego Communications",
    period: "January 2023 - February 2025",
    points: [
      "Built responsive web applications using React.js, JavaScript, HTML5, and CSS3.",
      "Created reusable React components and integrated REST APIs.",
      "Improved website performance and responsive user experience.",
    ],
  },
  {
    role: "Web Designer",
    company: "Guires Solutions Private Limited",
    period: "March 2020 - December 2022",
    points: [
      "Developed and maintained responsive websites using WordPress, HTML, CSS, and JavaScript.",
      "Customized WordPress themes, plugins, and website layouts.",
      "Handled website optimization, migration, backups, and maintenance.",
    ],
  },
  {
    role: "Web Designer",
    company: "Aximz Technologies Private Limited",
    period: "February 2019 - February 2020",
    points: [
      "Converted UI designs into responsive web pages.",
      "Developed websites using WordPress, HTML, CSS, and JavaScript.",
      "Improved mobile responsiveness and usability.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-8 py-16 lg:px-20">

      <div className="max-w-5xl mx-auto">

        <p className="text-blue-600 text-sm font-medium">
          EXPERIENCE
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Professional Journey
        </h2>


        <div className="mt-12 space-y-8">

          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="border
border-gray-200
rounded-2xl
p-8
shadow-sm
hover:shadow-md
transition"
            >

              <div className="flex flex-col md:flex-row md:justify-between">

                <div>
                  <h3 className="text-xl font-semibold">
                    {exp.role}
                  </h3>

                  <p className="text-gray-600 mt-1">
                    {exp.company}
                  </p>
                </div>

                <p className="text-sm text-blue-600 mt-2 md:mt-0">
                  {exp.period}
                </p>

              </div>


              <ul className="mt-5 space-y-2 text-gray-600 list-disc pl-5">

                {exp.points.map((point) => (
                  <li key={point}>
                    {point}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
