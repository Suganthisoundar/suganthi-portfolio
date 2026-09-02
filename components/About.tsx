export default function About() {
  return (
    <section id="about" className="py-20 px-8 lg:px-20">

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-blue-600 text-sm font-medium">
          ABOUT ME
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Full Stack Developer With 6+ Years of Experience
        </h2>

        <p className="mt-6 text-gray-600 leading-8">
          I am a Full Stack Developer specializing in building
          responsive web applications using React.js, Next.js,
          WordPress, Node.js, and modern web technologies.

          I have experience developing reusable UI components,
          integrating REST APIs, managing databases, and deploying
          production applications on AWS.
        </p>

      </div>


      <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">

        <div className="border rounded-xl p-6">
          <h3 className="font-semibold">
            Frontend Focus
          </h3>

          <p className="text-sm text-gray-600 mt-3">
            React.js, Next.js, responsive UI,
            reusable components and modern frontend practices.
          </p>
        </div>


        <div className="border rounded-xl p-6">
          <h3 className="font-semibold">
            WordPress Expertise
          </h3>

          <p className="text-sm text-gray-600 mt-3">
            Custom themes, plugins, WooCommerce,
            CMS customization and website optimization.
          </p>
        </div>


        <div className="border rounded-xl p-6">
          <h3 className="font-semibold">
            Delivery Mindset
          </h3>

          <p className="text-sm text-gray-600 mt-3">
            Client-focused development,
            performance optimization and clean solutions.
          </p>
        </div>

      </div>

    </section>
  );
}