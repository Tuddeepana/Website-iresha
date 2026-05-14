import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { NAV, SITE } from "@/data/site";
import { BUSINESSES } from "@/data/businesses";

export function Footer() {
  return (
    <footer className="bg-navy-gradient text-white/80">
      <div className="mx-auto w-full max-w-7xl container-px py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold-gradient font-bold text-navy">IH</span>
              <span className="font-display text-xl font-semibold text-white">
                Iresha <span className="text-gold">Holdings</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{SITE.description}</p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Facebook, href: SITE.socials.facebook, label: "Facebook" },
                { Icon: Instagram, href: SITE.socials.instagram, label: "Instagram" },
                { Icon: Linkedin, href: SITE.socials.linkedin, label: "LinkedIn" },
                { Icon: Youtube, href: SITE.socials.youtube, label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display text-base font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="transition-colors hover:text-gold">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-base font-semibold text-white">Our Businesses</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {BUSINESSES.map((b) => (
                <li key={b.slug}>
                  <Link to="/business/$slug" params={{ slug: b.slug }} className="transition-colors hover:text-gold">
                    {b.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display text-base font-semibold text-white">Stay Updated</h4>
            <p className="mt-4 text-sm">Subscribe for quarterly insights and group news.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/5"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                aria-label="Email address"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="grid w-12 place-items-center bg-gold text-navy">
                <ArrowRight size={16} />
              </button>
            </form>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-2.5"><MapPin size={16} className="mt-0.5 text-gold" /><span>{SITE.address}</span></li>
              <li className="flex items-center gap-2.5"><Phone size={16} className="text-gold" /><a href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>
              <li className="flex items-center gap-2.5"><Mail size={16} className="text-gold" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Crafted with care in Colombo, Sri Lanka.</p>
        </div>
      </div>
    </footer>
  );
}
