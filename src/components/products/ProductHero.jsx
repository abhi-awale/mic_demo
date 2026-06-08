export default function ProductHero({
  title = "Our Products",
  breadcrumb = "Home / Products",
  backgroundImage = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop",
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[280px] max-w-7xl items-center px-4 sm:px-6 lg:min-h-[350px] lg:px-8">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-red-400">
            Product Portfolio
          </p>

          <h1 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
            {title}
          </h1>

          <div className="mt-4 h-1 w-20 bg-red-600" />

          <p className="mt-5 text-sm text-gray-300 sm:text-base">
            {breadcrumb}
          </p>
        </div>
      </div>
    </section>
  );
}