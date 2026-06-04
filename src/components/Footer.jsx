import { Link } from 'react-router-dom';
import company from '../data/company.json';

const quickLinks = [
  { label: 'Product Categories', to: '/categories' },
  { label: 'All Products', to: '/products' },
  { label: 'About MIC India', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

function Footer() {
  return (
    <footer className="border-t border-mic-line bg-[#07101C] text-white">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.25fr_0.75fr_0.9fr]">
          <div className="space-y-5">
            <p className="eyebrow border-white/10 bg-white/10 text-white">
              Trusted Manufacturing Partner
            </p>
            <div>
              <h2 className="text-2xl font-semibold text-white">
                High Reliability Semiconductor Solutions
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
                MIC India supports industrial OEMs, power electronics designers,
                and global channel partners with dependable semiconductor devices
                built for performance, consistency, and scale.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              Quick Links
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/75 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/60">
              Contact
            </h3>
            <p className="text-sm text-white/75">{company.contact.address}</p>
            <a
              href={`mailto:${company.contact.email}`}
              className="block text-sm text-white/90"
            >
              {company.contact.email}
            </a>
            <a
              href={`tel:${company.contact.phoneRaw}`}
              className="block text-sm text-white/90"
            >
              {company.contact.phone}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-white/45">
          Copyright {new Date().getFullYear()} MIC India. Precision, quality,
          and manufacturing discipline.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
