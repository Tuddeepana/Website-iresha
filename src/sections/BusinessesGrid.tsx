import { Container, SectionHeading } from "@/components/Section";
import { Reveal, Stagger } from "@/components/Reveal";
import { BusinessCard } from "@/components/BusinessCard";
import { BUSINESSES } from "@/data/businesses";

export function BusinessesGrid({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="bg-background py-24">
      <Container>
        {withHeading && (
          <Reveal>
            <SectionHeading
              eyebrow="Our Businesses"
              title="Four sectors. One standard of excellence."
              description="From the forecourt to the dinner table, every Iresha business is built on quality, transparency and Sri Lankan craftsmanship."
            />
          </Reveal>
        )}
        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BUSINESSES.map((b) => (
            <BusinessCard key={b.slug} business={b} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
