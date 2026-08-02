import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Fuel, ShoppingBag, Wheat, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import type { Business } from "@/data/businesses";
import { itemVariants } from "./Reveal";

const ICONS = {
  fuel: Fuel,
  shopping: ShoppingBag,
  wheat: Wheat,
  utensils: UtensilsCrossed,
};

export function BusinessCard({ business }: { business: Business }) {
  const Icon = ICONS[business.icon];
  return (
    <motion.div variants={itemVariants}>
      <Link
        to="/business/$slug"
        params={{ slug: business.slug }}
        className="group relative block overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-500 hover:shadow-elevated"
      >
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={business.image}
            alt={business.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy-deep/85 via-navy-deep/30 to-transparent" />
          <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-xl bg-white/95 text-navy backdrop-blur">
            <Icon size={20} />
          </div>
          <div className="absolute inset-x-5 bottom-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {business.tagline.split(".")[0]}
            </p>
            <h3 className="mt-1 font-display text-2xl text-white">{business.title}</h3>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">{business.description}</p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy">
            Discover more
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
