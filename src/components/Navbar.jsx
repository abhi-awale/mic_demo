import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "Products", to: "/products" },
  { name: "About Us", to: "/about" },
  { name: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="top-gradient text-white text-sm">
        <div className="mx-auto px-4">
          <div className="h-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span>⊕</span>
              <span>Welcome to MIC India</span>
            </div>

            <div className="hidden lg:flex items-center">
              <a
                href="#"
                className="flex items-center gap-2 px-6 border-l border-white/20"
              >
                ✉<span>info@micindia.com</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-2 px-6 border-l border-white/20"
              >
                ☎<span>+91 120 456 7890</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 border-b border-mic-line/70 bg-white/90 backdrop-blur-xl z-50">
        <div className="shell">
          <div className="flex h-18 items-center justify-between gap-4 py-3">
            <Link
              to="/"
              onClick={closeMenu}
            >
              <img
                src="https://micindia.com/assets/img/logo.png"
                alt="MIC India"
                className="h-20 p-2"
              />
            </Link>

            <nav className="hidden items-center gap-2 lg:flex">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-mic-primary text-white"
                        : "text-mic-slate hover:bg-mic-cloud hover:text-mic-primary"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block">
                <Link to="/contact" className="btn-primary">
                Request Consultation
                </Link>
            </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-mic-line text-mic-line lg:hidden"
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
          </div>

          {isOpen ? (
          <div className="border-t border-mic-line/70 py-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? 'bg-mic-primary text-white'
                        : 'text-mic-slate hover:bg-mic-cloud hover:text-mic-primary'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to="/contact" onClick={closeMenu} className="btn-primary mt-2">
                Request Consultation
              </Link>
            </nav>
          </div>
        ) : null}
        </div>
      </header>
    </>
  );
}

export default Navbar;
