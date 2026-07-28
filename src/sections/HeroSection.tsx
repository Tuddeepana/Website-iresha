import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

import heroBg1 from "@/assets/HeroSection_IreshaHoldings.webp";
import heroBg2 from "@/assets/biz-fuel.webp";
import heroBg3 from "@/assets/Iresha super city7.webp";

const SLIDER_IMAGES = [heroBg1, heroBg2, heroBg3];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDER_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex max-h-screen items-center object-fill overflow-hidden bg-navy-gradient pt-32 pb-24 text-white sm:pt-40 md:pb-32">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={currentIndex}
            src={SLIDER_IMAGES[currentIndex]}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-linear-to-br from-navy-deep/90 via-navy/75 to-navy-deep/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(212,175,55,0.18),transparent_55%)]" />

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
          {["Building", "Sri Lanka’s Future", "Through", "Diversified Excellence"].map(
            (word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="mr-3 inline-block"
              >
                {i === 1 ? <span className="text-gold-gradient">{word}</span> : word}
              </motion.span>
            ),
          )}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          A diversified group operating across fuel retail, supermarkets, rice milling and
          hospitality — uniting Sri Lankan heritage with international standards.
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
