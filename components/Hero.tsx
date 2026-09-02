export default function Hero() {
  return (
    <section className="min-h-[85vh] pt-24 flex items-center px-8 lg:px-20">

      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

        {/* Left */}
        <div>

          <p className="text-blue-600 font-medium">
          Full Stack Developer | React.js | Next.js
6+ years building production applications
          </p>

          <h1 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Building scalable web applications with
            <span className="text-blue-600">
              {" "}React & Next.js & Node.js
            </span>
          </h1>


          <p className="mt-6 text-gray-600 text-lg leading-8">
            I'm Suganthi S, a Full Stack Developer with 6+ years
            of experience building responsive websites,
            web applications, WordPress solutions, and
            production-ready systems.
          </p>


          <div className="flex gap-4 mt-8">

            <button className="bg-black text-white px-6 py-3 rounded-lg">
              View Projects
            </button>

            <button className="border px-6 py-3 rounded-lg">
              Download Resume
            </button>

          </div>


          <div className="flex flex-wrap gap-3 mt-8">

            {[
              "React.js",
              "Next.js",
              "TypeScript",
              "Node.js",
              "AWS"
            ].map((skill) => (
              <span
                key={skill}
                className="border px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>


        {/* Right */}
        <div className="bg-gray-100 rounded-2xl p-8">

          <pre className="text-sm">
{`const developer = {
  name: "Suganthi S",
  role: "Full Stack Developer",
  experience: "6+ years",
  expertise: [
    "React",
    "Next.js",
    "Node.js",
    "AWS"
  ],
  focus: "Scalable web applications"
  ]
}`}
          </pre>

        </div>


      </div>

    </section>
  );
}