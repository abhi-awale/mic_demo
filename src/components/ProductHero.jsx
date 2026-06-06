export default function ProductHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="relative h-[300px] md:h-[340px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/product-banner.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817]/95 via-[#020817]/85 to-[#020817]/40" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Breadcrumb */}
            <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-gray-300">
              <a href="/" className="hover:text-white">
                Home
              </a>

              <span>/</span>

              <a
                href="/products"
                className="hover:text-white"
              >
                Products
              </a>

              <span>/</span>

              <a
                href="/products/rectifier-diodes"
                className="hover:text-white"
              >
                Rectifier Diodes
              </a>

              <span>/</span>

              <a
                href="/products/rectifier-diodes/standard"
                className="hover:text-white"
              >
                Standard Rectifier Diodes
              </a>

              <span>/</span>

              <span className="text-white">
                1N4007
              </span>
            </div>

            {/* Product Title */}
            <h1 className="text-4xl font-bold text-white md:text-6xl">
              1N4007
            </h1>

            <h2 className="mt-2 text-2xl font-semibold text-white md:text-4xl">
              General Purpose Rectifier Diode
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-300">
              The 1N4007 is a general purpose silicon
              rectifier diode designed for high
              reliability and performance in a wide
              range of applications.
            </p>
          </div>
        </div>

        {/* Product Image Right Side */}
        <div className="absolute right-0 top-0 hidden h-full w-[40%] items-center justify-center lg:flex">
          <img
            src="/images/1n4007-hero.png"
            alt="1N4007"
            className="max-h-[260px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}