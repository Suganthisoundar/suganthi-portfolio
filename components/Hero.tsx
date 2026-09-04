export default function Hero() { 
  return ( 
    <section className="flex min-h-[72vh] items-center px-8 pt-24 pb-12 lg:px-20"> 
 
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2"> 
 
        {/* Left */} 
        <div> 
 
          <p className="text-blue-600 font-medium">
            Full Stack Developer | 6+ Years Experience | React.js • Next.js • Node.js
          </p> 
 
          <h1 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight"> 
            I build 
            <span className="text-blue-600">
              {" "}scalable web platforms
            </span>{" "} 
            that help businesses grow
          </h1> 
 
          <p className="mt-6 text-gray-600 text-lg leading-8"> 
            I&apos;m Suganthi S, a Full Stack Developer with 6+ years of experience 
            building SaaS platforms, web applications, and production-ready 
            systems using modern technologies.
          </p> 
 
   <div className="flex gap-4 mt-8">

  <a
    href="#projects"
    className="bg-black text-white px-6 py-3 rounded-lg"
  >
    View Projects
  </a>

  <a
    href="/suganthi-resume.pdf"
    download
    className="border px-6 py-3 rounded-lg"
  >
    Download Resume
  </a>

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
  <pre className="text-sm leading-6">
{`const developer = {
  name: "Suganthi S",
  role: "Full Stack Developer",
  experience: "6+ years",
  builds: [
    "SaaS Platforms",
    "Web Applications",
    "Production Systems"
  ],
  stack: [
    "React",
    "Next.js",
    "Node.js",
    "AWS"
  ]
}`}
  </pre>
</div>
 
      </div> 
 
    </section> 
  ); 
}
