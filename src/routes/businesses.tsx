import { createFileRoute } from "@tanstack/react-router";
import { BusinessesGrid } from "@/sections/BusinessesGrid";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/businesses")({
  component: BusinessesPage,
  head: () => ({
    meta: [
      { title: "Our Business — Iresha Holdings" },
      {
        name: "description",
        content:
          "Explore Iresha Holdings' four business sectors: fuel retail, supermarkets, rice milling and hospitality.",
      },
      { property: "og:title", content: "Our Business — Iresha Holdings" },
      { property: "og:description", content: "Four sectors. One standard of excellence." },
      { property: "og:url", content: "/businesses" },
    ],
    links: [{ rel: "canonical", href: "/businesses" }],
  }),
});

function BusinessesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-gradient pt-40 pb-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(212,175,55,0.2),transparent_55%)]" />
        <Container>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="gold-divider" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Our Business
              </span>
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl text-white md:text-6xl">
              A diversified portfolio, <span className="text-gold-gradient">united by quality</span>
            </h1>
            <p className="mt-6 max-w-2xl text-white/75">
              Each Iresha business operates with autonomy and entrepreneurial focus, while sharing
              the same group commitment to integrity, service and craftsmanship.
            </p>
          </Reveal>
        </Container>
      </section>

      <BusinessesGrid withHeading={false} />

      <section className="bg-mist py-24">
        <Container>
          <Reveal>
            <SectionHeading align="center" eyebrow="Why Iresha" title="The Iresha advantage" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Operational excellence",
                d: "Disciplined execution, modern systems and rigorous quality control across every business.",
              },
              {
                t: "Local partnerships",
                d: "Deep relationships with farmers, suppliers and franchise partners across the island.",
              },
              {
                t: "Long-term thinking",
                d: "Investments measured in decades, not quarters — building businesses that endure.",
              },
            ].map((b) => (
              <Reveal
                key={b.t}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <div className="font-display text-xl text-navy">{b.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
