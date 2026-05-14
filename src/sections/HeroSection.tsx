import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Parallax bg */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/90 via-navy/75 to-navy-deep/95" />
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_70%,rgba(212,175,55,0.18),transparent_55%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl container-px pt-32 pb-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <span className="gold-divider" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Iresha Holdings · Sri Lanka
          </span>
        </motion.div>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl">
          {["Building", "Sri Lanka’s Future", "Through", "Diversified Excellence"].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mr-3 inline-block"
            >
              {i === 1 ? <span className="text-gold-gradient">{word}</span> : word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          A diversified group operating across fuel retail, supermarkets, rice milling and hospitality —
          uniting Sri Lankan heritage with international standards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/businesses"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-navy shadow-gold transition-transform hover:-translate-y-0.5"
          >
            Explore Our Business
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
          className="mt-20 grid max-w-3xl grid-cols-2 gap-y-8 gap-x-10 sm:grid-cols-4"
        >
          {[
            { v: "26+", l: "Years of Heritage" },
            { v: "4", l: "Sectors" },
            { v: "80+", l: "Outlets" },
            { v: "2.4K", l: "Team Members" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl text-gold">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/55">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute inset-x-0 bottom-8 flex justify-center text-white/60"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
