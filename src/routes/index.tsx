import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/sections/HeroSection";
import { BusinessesGrid } from "@/sections/BusinessesGrid";
import { StatsCounter } from "@/sections/StatsCounter";
import { ContactSection } from "@/sections/ContactSection";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal, Stagger } from "@/components/Reveal";
import { LogoSlider } from "@/components/LogoSlider";
import { Timeline } from "@/components/Timeline";
import { NewsCard } from "@/components/NewsCard";
import { NEWS } from "@/data/news";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — ${SITE.tagline}` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <HeroSection />

      <BusinessesGrid />

      {/* Logo strip */}
      <section className="border-y border-border bg-background py-14">
        <Container>
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Trusted by communities across Sri Lanka
            </p>
          </Reveal>
          <div className="mt-8"><LogoSlider /></div>
        </Container>
      </section>

      <StatsCounter />

      {/* Journey */}
      <section className="bg-mist py-24">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Our Journey"
              title="Twenty-six years of disciplined growth"
              description="From a single rice mill to a diversified group spanning four sectors — every milestone built on trust, quality and partnership."
            />
          </Reveal>
          <div className="mt-16"><Timeline /></div>
        </Container>
      </section>

      {/* News */}
      <section className="bg-background py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="News & Media"
              title="Latest from the group"
              description="Announcements, openings and stories from across the Iresha family of companies."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
            {NEWS.map((n) => <NewsCard key={n.title} {...n} />)}
          </Stagger>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
