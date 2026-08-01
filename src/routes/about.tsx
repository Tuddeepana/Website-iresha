import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal, Stagger } from "@/components/Reveal";
import { StatsCounter } from "@/sections/StatsCounter";
import { Quote, Compass, Target } from "lucide-react";
import chairmanImg from "@/assets/iresha-holdings-chairman.webp";
import aboutBg from "@/assets/about-us-iresha-holdings.webp";
import gallery1 from "@/assets/iresha-fuel-station-opens-tissamaharama8.webp";
import gallery2 from "@/assets/iresha-fuel-station-opens-tissamaharama7.webp";
import gallery3 from "@/assets/iresha-fuel-station-opens-tissamaharama5.webp";
import gallery4 from "@/assets/iresha--fuel-station-opens-tissamaharama.webp";
import gallery5 from "@/assets/iresha-fuel-station-opens-tissamaharama3.webp";
import gallery6 from "@/assets/iresha-fuel-station-forecourt.webp";
import gallery7 from "@/assets/iresha-fuel-station-opens-tissamaharama6.webp";
import gallery8 from "@/assets/iresha-fuel-station-opens-tissamaharama4.webp";

import city0 from "@/assets/iresha-super-city-supermarket.webp";
import city1 from "@/assets/iresha-super-city-supermarket-interior-1.webp";
import city2 from "@/assets/iresha-super-city-supermarket-interior-2.webp";
import city3 from "@/assets/iresha-super-city-supermarket-interior-3.webp";
import city4 from "@/assets/iresha-super-city-supermarket-interior-4.webp";
import city5 from "@/assets/iresha-super-city-supermarket-exterior-5.webp";
import city6 from "@/assets/iresha-super-city-supermarket-exterior-6.webp";
import city7 from "@/assets/iresha-super-city-supermarket-products-7.webp";

const ALL_GALLERY_IMAGES = [
  { src: gallery1, className: "col-span-2 row-span-2" },
  { src: gallery2, className: "col-span-1 row-span-1" },
  { src: gallery3, className: "col-span-1 row-span-1" },
  { src: gallery4, className: "col-span-1 row-span-1" },
  { src: gallery5, className: "col-span-1 row-span-1" },
  { src: gallery6, className: "col-span-1 row-span-1" },
  { src: gallery7, className: "col-span-1 row-span-1" },
  { src: gallery8, className: "col-span-2 row-span-1" },
  { src: city0, className: "col-span-1 row-span-1" },
  { src: city1, className: "col-span-1 row-span-1" },
  { src: city2, className: "col-span-2 row-span-2" },
  { src: city3, className: "col-span-1 row-span-1" },
  { src: city4, className: "col-span-1 row-span-1" },
  { src: city5, className: "col-span-1 row-span-1" },
  { src: city6, className: "col-span-1 row-span-1" },
  { src: city7, className: "col-span-2 row-span-1" },
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Iresha Holdings — Heritage, Vision & Leadership" },
      {
        name: "description",
        content:
          "Discover the story, vision and people behind Iresha Holdings — a diversified Sri Lankan group across fuel, retail, agri and hospitality.",
      },
      { property: "og:title", content: "About Iresha Holdings" },
      {
        property: "og:description",
        content:
          "Heritage, vision and leadership of one of Sri Lanka's most respected diversified groups.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  const [showAllGallery, setShowAllGallery] = useState(false);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-40 pb-24 text-white">
        {/* Background Image */}
        <img
          src={aboutBg}
          alt="About background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/60 to-black/40" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.15),transparent_60%)]" />

        {/* Content */}
        <Container>
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="gold-divider" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold drop-shadow-md">
                About Us
              </span>
            </div>

            <h1 className="mt-4 max-w-3xl font-display text-4xl text-white/95 md:text-6xl leading-tight drop-shadow-xl">
              A Sri Lankan group built on{" "}
              <span className="text-gold-gradient">trust and craftsmanship</span>
            </h1>

            <p className="mt-6 max-w-2xl text-white/90 text-lg drop-shadow-lg">
              For more than two decades, Iresha Holdings has grown from a single rice mill in
              Polonnaruwa into a national group serving Sri Lankan households and businesses every
              day.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* History */}
      <section className="bg-background py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Our History"
                title="From a single mill to a diversified group"
                description="In 1992, Iresha holdings established Iresha Rice Mills as its inaugural venture, laying the foundation for a legacy of innovation, quality and customer satisfaction."
              />
              <p className="mt-4 max-w-xl text-muted-foreground">
                Today we operate over 5 outlets nationwide, and partner with thousands of farmers,
                suppliers and franchise owners across the country.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-gold-gradient opacity-15 blur-2xl" />
                <div className="aspect-4/5 overflow-hidden rounded-3xl bg-navy shadow-elevated">
                  <img
                    src={chairmanImg}
                    alt="Group Chairman"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="bg-mist py-24">
        <Container>
          <Reveal>
            <SectionHeading align="center" eyebrow="Vision & Mission" title="Anchored by purpose" />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                Icon: Compass,
                title: "Our Vision",
                text: "To be the region’s most trusted and diversified business group, enriching lives by delivering quality products, reliable services, and sustainable growth across agriculture, retail, energy, hospitality, machinery, and transportation.",
              },
              {
                Icon: Target,
                title: "Our Mission",
                text: "We are committed to delivering high-quality products and reliable services across agriculture, retail, energy, hospitality, machinery and transportation. Through integrity, innovation, operational excellence, and customer focus, we create value customers, provide rewarding opportunities for our employees, support our business partners, and contribute to the sustainable development of the communities we serve.",
              },
            ].map(({ Icon, title, text }) => (
              <Reveal
                key={title}
                className="rounded-2xl border border-border bg-card p-10 shadow-soft"
              >
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-navy-gradient text-gold">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-navy">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Chairman Message */}
      <section className="bg-background py-24">
        <Container>
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-navy-gradient text-white shadow-elevated">
              <div className="grid lg:grid-cols-5">
                <div className="relative lg:col-span-2">
                  <img
                    src={chairmanImg}
                    alt="Chairman"
                    loading="lazy"
                    className="h-full w-full object-cover -scale-x-100"
                  />
                </div>
                <div className="relative p-10 lg:col-span-3 lg:p-14">
                  <Quote size={48} className="text-gold/60" />
                  <p className="mt-6 font-display text-2xl leading-relaxed text-white md:text-3xl">
                    "our journey is built on hard work, integrity, and a commitment to serving our
                    community. From our Iresha Rice mill to our Iresha filling station, Iresha super
                    city, Hotel Tissa restaurant & bar, Iresha machinery & transport, we strive to
                    deliver quality, reliability, and value in everything we do.
                    <br />
                    <br /> We sincerely thank our customers, employees, and business partners for
                    their continued trust and support. Together, we remain committed to sustainable
                    growth and excellence as we build a strong future."
                  </p>
                  <div className="mt-10">
                    <div className="font-display text-2xl text-gold-gradient italic">
                      G.A. Sunil Shantha
                    </div>
                    <div className="mt-1 text-sm text-white/60">
                      Founder & Group Chairman, Iresha Holdings
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <StatsCounter />

      {/* Gallery */}
      <section className="bg-mist py-24">
        <Container>
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Gallery"
              title="Behind the Scenes"
              description="A glimpse into the world of Iresha Holdings."
            />
          </Reveal>
          <Stagger className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-50 md:auto-rows-62.5">
            {ALL_GALLERY_IMAGES.slice(0, showAllGallery ? undefined : 8).map(
              ({ src, className }, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated ${className}`}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
                </div>
              ),
            )}
          </Stagger>

          {ALL_GALLERY_IMAGES.length > 8 && (
            <Reveal delay={0.2} className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAllGallery(!showAllGallery)}
                className="group inline-flex items-center gap-2 rounded-full border-2 border-gold text-gold px-8 py-3.5 text-sm font-semibold transition-all hover:bg-gold hover:text-navy"
              >
                {showAllGallery ? "Show Less" : "See More"}
              </button>
            </Reveal>
          )}
        </Container>
      </section>
    </div>
  );
}
