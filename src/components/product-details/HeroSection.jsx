export default function HeroSection({ product }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative min-h-[700px] md:min-h-[600px] lg:h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081221]/95 via-[#081221]/85 to-[#081221]/50" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8 py-16 lg:py-0">
          <div className="max-w-3xl">
            {/* Mobile Breadcrumb */}
            <div className="mb-4 text-sm text-gray-300 md:hidden">
              Products / {product.name}
            </div>

            {/* Desktop Breadcrumb */}
            <div className="mb-8 hidden flex-wrap items-center gap-2 text-sm text-gray-300 md:flex">
              <span className="cursor-pointer hover:text-white">
                Home
              </span>

              <span>/</span>

              <span className="cursor-pointer hover:text-white">
                Products
              </span>

              <span>/</span>

              <span className="cursor-pointer hover:text-white">
                Rectifier Diodes
              </span>

              <span>/</span>

              <span className="cursor-pointer hover:text-white">
                Standard Rectifier Diodes
              </span>

              <span>/</span>

              <span className="font-medium text-white">
                {product.name}
              </span>
            </div>

            {/* Category */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-red-500">
              Standard Rectifier Diodes
            </p>

            {/* Product Name */}
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-6xl">
              {product.name}
            </h1>

            {/* Subtitle */}
            <h2 className="mt-3 text-lg font-semibold text-white sm:text-xl md:text-3xl">
              {product.subtitle}
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-6 text-gray-300 md:text-base md:leading-7">
              {product.description}
            </p>

            {/* Mobile Product Image */}
            <div className="mt-8 lg:hidden">
              <img
                src={product.image}
                alt={product.name}
                className="mx-auto h-40 object-contain sm:h-52"
              />
            </div>

            {/* Product Highlights */}
            <div className="mt-8 flex flex-wrap gap-2 md:gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur md:px-4 md:py-2 md:text-sm">
                1000V VRRM
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur md:px-4 md:py-2 md:text-sm">
                1A Forward Current
              </span>

              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur md:px-4 md:py-2 md:text-sm">
                DO-41 Package
              </span>

              <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-xs text-green-300 backdrop-blur md:px-4 md:py-2 md:text-sm">
                RoHS Compliant
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Product Image */}
        <div className="absolute right-10 top-1/2 hidden -translate-y-1/2 lg:block">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[240px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}