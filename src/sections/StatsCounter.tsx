import { Container } from "@/components/Section";
import { Counter } from "@/components/Counter";

const STATS = [
  { value: 4, suffix: "", label: "Group Companies" },
  { value: 80, suffix: "+", label: "Outlets Nationwide" },
  { value: 2400, suffix: "+", label: "Team Members" },
  { value: 26, suffix: "", label: "Years of Heritage" },
];

export function StatsCounter() {
  return (
    <section className="bg-navy-gradient py-20 text-white">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl text-gold-gradient md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
