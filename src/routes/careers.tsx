import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal, Stagger } from "@/components/Reveal";
import { TrendingUp, Lightbulb, Globe2, HeartHandshake, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers at Iresha Holdings — Build Your Career With Us" },
      {
        name: "description",
        content:
          "Join Iresha Holdings — a diversified Sri Lankan group offering careers across fuel, retail, agri and hospitality.",
      },
      { property: "og:title", content: "Careers — Iresha Holdings" },
      { property: "og:description", content: "Build your career with Iresha Holdings." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
});

const PERKS = [
  {
    Icon: TrendingUp,
    title: "Growth",
    text: "Clear career pathways and structured development across every business unit.",
  },
  {
    Icon: Lightbulb,
    title: "Innovation",
    text: "We invest in the modern systems, training and technology our teams need.",
  },
  {
    Icon: Globe2,
    title: "Global Standards",
    text: "International best practice, applied with deep local knowledge.",
  },
  {
    Icon: HeartHandshake,
    title: "Culture",
    text: "A respectful, family-spirited culture grounded in Sri Lankan values.",
  },
];

function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-gradient pt-40 pb-24 text-white">
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_80%_60%,rgba(212,175,55,0.18),transparent_55%)]" />
        <Container>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="gold-divider" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Careers
              </span>
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl text-white md:text-6xl">
              Build Your Career With <span className="text-gold-gradient">Iresha Holdings</span>
            </h1>
            <p className="mt-6 max-w-2xl text-white/75">
              Join one of Sri Lanka's most respected diversified groups — and grow alongside more
              than 2,400 colleagues across four sectors.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Why */}
      <section className="bg-background py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Work Here"
              title="A career with purpose"
              description="From your first day to your tenth year, we invest in our people the same way we invest in our businesses — for the long term."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map(({ Icon, title, text }) => (
              <Reveal
                key={title}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-gradient text-gold">
                  <Icon size={20} />
                </div>
                <h4 className="mt-5 font-display text-lg text-navy">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-mist py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-navy-gradient p-10 text-white shadow-elevated md:flex-row md:items-center md:p-14">
            <div>
              <h3 className="font-display text-3xl text-white md:text-4xl">Join Us</h3>
              <p className="mt-2 max-w-xl text-white/70">
                Send your CV to our group HR team and we'll match you with the right opportunity.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy shadow-gold"
            >
              Submit your CV <ArrowRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
