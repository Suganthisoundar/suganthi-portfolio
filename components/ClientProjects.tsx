import Image from "next/image";

const websites = [
  {
    name: "MoneyPechu",
    type: "Business Website",
    image: "/projects/portfolio-17.png",
  },
  {
    name: "Aionion Global",
    type: "Business Website",
    image: "/projects/portfolio-18.png",
  },
  {
    name: "Volkswagen Chennai",
    type: "Business Website",
    image: "/projects/portfolio-4.png",
  },
  {
    name: "Lalithaa Jewellery",
    type: "E-Commerce Website",
    image: "/projects/portfolio-5.png",
  },
  {
    name: "Aionion Capital",
    type: "Business Website",
    image: "/projects/portfolio-19.png",
  },
  {
    name: "Savithri Gorakshana Samithi",
    type: "Business Website",
    image: "/projects/portfolio-20.png",
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

              <Image
                src={site.image}
                alt={site.name}
                width={600}
                height={384}
                className="w-full h-48 object-cover"
              />


              <div className="p-5">

                <h3 className="font-semibold text-lg">
                  {site.name}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {site.type}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
