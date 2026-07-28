import { ArrowUpRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants } from "./Reveal";

export function NewsCard({
  title,
  excerpt,
  date,
  category,
  href,
  image,
}: {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href: string;
  image?: string;
}) {
  return (
    <motion.a
      variants={itemVariants}
      href={href}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className="relative h-44 overflow-hidden bg-navy-gradient">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_30%_30%,white,transparent_50%)]" />
        )}
        <div className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur">
          {category}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar size={12} /> {date}
        </div>
        <h3 className="mt-3 font-display text-lg leading-snug text-navy">{title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{excerpt}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy">
          Read more
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </motion.a>
  );
}
