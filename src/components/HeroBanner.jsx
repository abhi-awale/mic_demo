import { Link } from "react-router-dom";

function HeroBanner() {
  return (
    <section className="relative ">
      <img
        src="/images/banner.png"
        alt="MIC India Components"
        className="absolute h-full w-full blur-sm bject-cover "
      />
      <div className="absolute banner-shadow"></div>

      <div className="shell relative mx-auto p-6 lg:px-8">
        <div className="flex items-center">
          <div className="max-w-3xl">
            <span className="mt-6 inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-500">
              Since 1988
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Powering Innovation
              <span className="block text-red-600">Delivering Excellence</span>
            </h1>
            <p className="mt-8 leading-8 text-slate-300">
              Master Instrument Corporation (MIC) is a pioneer and world leader
              in the production of Diodes, Bridge Rectifiers and LEDs. Since
              1988, MIC has consistently delivered world-class quality products
              and exceptional customer experience across global markets.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="rounded-lg bg-mic-primary px-8 py-4 font-semibold text-white transition duration-300 hover:bg-mic-primary-soft"
              >
                Explore Products →
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-white/30 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-black"
              >
                Contact Us →
              </Link>
            </div>

                <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 lg:grid-cols-4">
                    <div>
                        <h3 className="text-3xl font-bold text-white">
                            35+
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Years of Excellence
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white">
                            ISO
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            9001:2015 Certified
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white">
                            Global
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Supply Network
                        </p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-white">
                            100%
                        </h3>

                        <p className="mt-2 text-sm text-slate-400">
                            Quality Focused
                        </p>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
