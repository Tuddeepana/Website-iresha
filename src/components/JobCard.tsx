import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants } from "./Reveal";

export function JobCard({
  title,
  department,
  location,
  type,
}: {
  title: string;
  department: string;
  location: string;
  type: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold hover:shadow-soft md:flex-row md:items-center md:justify-between"
    >
      <div>
        <span className="inline-block rounded-full bg-mist px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy">
          {type}
        </span>
        <h4 className="mt-3 font-display text-xl text-navy">{title}</h4>
        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Briefcase size={14} /> {department}</span>
          <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {location}</span>
        </div>
      </div>
      <button className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-gold group-hover:text-navy">
        Apply Now
        <ArrowRight size={14} />
      </button>
    </motion.div>
  );
}
