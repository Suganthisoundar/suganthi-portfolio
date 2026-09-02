import Image from "next/image";


const websites = [
  {
    name: "MoneyPechu",
    category: "Business Website",
    image: "/projects/portfolio-17.png",
  },
  {
    name: "Aionion Global",
    category: "Business Website",
    image: "/projects/portfolio-18.png",
  },
  {
    name: "Volkswagen Chennai",
    category: "Business Website",
    image: "/projects/portfolio-4.png",
  },
  {
    name: "Lalithaa Jewellery",
    category: "E-Commerce Website",
    image: "/projects/portfolio-5.png",
  },
];

export default function ClientProjects() {
  return (
    <section className="py-24 px-8 lg:px-20">

      <div className="max-w-6xl mx-auto">

        <p className="text-blue-600 text-sm font-medium">
          CLIENT WORK
        </p>

        <h2 className="text-3xl font-bold mt-3">
          Website Projects Delivered
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {websites.map((site) => (
            <div
              key={site.name}
              className="
                border
                rounded-2xl
                overflow-hidden
                hover:shadow-lg
                transition
              "
            >

              <img
                src={site.image}
                alt={site.name}
                className="w-full h-48 object-cover"
              />


              <div className="p-5">

                <h3 className="font-semibold text-lg">
                  {site.name}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {site.category}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}