import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/data/site";
import { useScrolled } from "@/hooks/useScrolled";

export function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "glass-nav shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between container-px">
        <Link to="/" className="flex items-center gap-2.5" aria-label={SITE.name}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-gradient text-sm font-bold text-gold shadow-soft">
            IH
          </span>
          <span className={`font-display text-lg font-semibold tracking-tight ${scrolled || open ? "text-navy" : "text-white"}`}>
            Iresha <span className="text-gold">Holdings</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative text-sm font-medium transition-colors ${
                scrolled ? "text-slate hover:text-navy" : "text-white/85 hover:text-white"
              }`}
            >
              {item.label}
              {isActive(item.to) && (
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gold" />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className={`grid h-10 w-10 place-items-center rounded-md lg:hidden ${
            scrolled || open ? "text-navy" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-auto w-full max-w-7xl container-px pb-6">
            <nav className="flex flex-col gap-1 rounded-2xl border border-border bg-white p-3 shadow-soft">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(item.to) ? "bg-navy text-white" : "text-slate hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
