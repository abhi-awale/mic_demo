import { ArrowRight } from "lucide-react";

function ProductCategories() {

    const categories = [
    {
      name: "Rectifier Diodes",
      description: "High performance rectifiers",
      image:
        "https://micindia.com/wcm/prodImages/SOD-123FL.gif",
    },
    {
      name: "Zener Diodes",
      description: "Fast switching solutions",
      image:
        "https://micindia.com/wcm/prodImages/78_1.gif",
    },
    {
      name: "TVS Diodes",
      description: "Low forward voltage drop",
      image:
        "https://micindia.com/wcm/prodImages/SMB.gif",
    },
    {
      name: "Bridge Rectifiers",
      description: "Reliable bridge rectifiers",
      image:
        "https://micindia.com/wcm/prodImages/tsb-5.gif",
    },
    {
      name: "LEDs",
      description: "High efficiency LEDs",
      image:
        "https://media.istockphoto.com/id/2256745389/photo/close-up-of-blue-led-diode-isolated-on-black-background.jpg?s=1024x1024&w=is&k=20&c=IBJQxWk3ucdUjRPgqT-zGa8Y5oWKKNzO0iVGY-T69CM=",
    },
    {
      name: "Transistors",
      description: "Wide range of transistors",
      image:
        "https://images.unsplash.com/photo-1662819202032-d3f07430724a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mb-12 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
              Product Categories
            </h2>

            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-mic-primary" />
          </div>
          <button className="absolute right-0 hidden items-center gap-2 font-semibold text-mic-primary transition hover:text-mic-primary-soft md:flex">
            View All Categories
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {categories.map((item, index) => (
            <div
              key={index}
              className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="mb-6 flex h-28 items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-30 w-auto object-contain transition duration-300 group-hover:scale-110"
                   
                />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                {item.name}
              </h3>

              <p className="text-sm leading-6 text-gray-600">
                {item.description}
              </p>

              {/* Arrow */}
              <div className="mt-auto flex justify-end pt-8">
                <ArrowRight
                  size={18}
                  className="text-red-500 transition duration-300 group-hover:translate-x-1"
                />
              </div>
            </div>
          ))}
        </div>

         <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-2 font-semibold text-red-600">
            View All Categories
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}

export default ProductCategories;
