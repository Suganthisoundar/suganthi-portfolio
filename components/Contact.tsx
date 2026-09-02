export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 lg:px-20">

      <div className="max-w-5xl mx-auto text-center">

        <p className="text-blue-600 text-sm font-medium">
          CONTACT
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Let's Work Together
        </h2>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
          Have a project or opportunity? Feel free to reach out.
          I am available for full-stack development,
          React/Next.js applications, and WordPress solutions.
        </p>


        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold">
              Email
            </h3>

            <a
              href="mailto:suganthisoundars@gmail.com"
              className="text-blue-600 text-sm mt-2 block"
            >
              suganthisoundars@gmail.com
            </a>
          </div>


          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold">
              LinkedIn
            </h3>

            <a
              href="https://www.linkedin.com/in/suganthisoundararajan"
              className="text-blue-600 text-sm mt-2 block"
            >
              View Profile →
            </a>
          </div>


          <div className="border rounded-2xl p-6">
            <h3 className="font-semibold">
              GitHub
            </h3>

            <a
              href="https://github.com/Suganthisoundar"
              className="text-blue-600 text-sm mt-2 block"
            >
              View GitHub →
            </a>
          </div>

        </div>


        <a
          href="/suganthi-resume.pdf"
          download
          className="
            inline-block
            mt-10
            bg-black
            text-white
            px-6
            py-3
            rounded-lg
          "
        >
          Download Resume
        </a>


      </div>

    </section>
  );
}