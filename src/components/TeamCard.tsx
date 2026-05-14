import { motion } from "framer-motion";
import type { TeamMember } from "@/data/team";
import { itemVariants } from "./Reveal";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className="relative mx-auto h-24 w-24">
        <div className="absolute inset-0 rounded-full bg-gold-gradient opacity-20 blur-xl transition-opacity group-hover:opacity-40" />
        <div className="relative grid h-full w-full place-items-center rounded-full bg-navy-gradient font-display text-2xl font-semibold text-gold">
          {member.initials}
        </div>
      </div>
      <h4 className="mt-5 font-display text-lg text-navy">{member.name}</h4>
      <p className="mt-1 text-sm font-medium text-foreground">{member.title}</p>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{member.department}</p>
    </motion.div>
  );
}
