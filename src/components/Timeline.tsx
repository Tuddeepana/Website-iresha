import { motion } from "framer-motion";
import { TIMELINE } from "@/data/timeline";

export function Timeline() {
  return (
    <div className="relative mx-auto max-w-3xl">
      {/* central line */}
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold via-border to-transparent md:left-1/2" />

      <div className="space-y-12">
        {TIMELINE.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="font-display text-3xl text-gold">{item.year}</div>
                <h4 className="mt-1 font-display text-xl text-navy">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>

            <div className="absolute left-4 -translate-x-1/2 md:left-1/2">
              <div className="grid h-4 w-4 place-items-center rounded-full bg-gold-gradient ring-4 ring-white" />
            </div>

            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
