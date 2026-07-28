import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Fuel, ShoppingBag, Wheat, UtensilsCrossed } from "lucide-react";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal, Stagger } from "@/components/Reveal";
import { itemVariants } from "@/components/Reveal";
import { motion } from "framer-motion";
import { BUSINESSES, getBusiness, type Business } from "@/data/businesses";

const ICONS = { fuel: Fuel, shopping: ShoppingBag, wheat: Wheat, utensils: UtensilsCrossed };

export const Route = createFileRoute("/business/$slug")({
  loader: ({ params }) => {
    const business = getBusiness(params.slug);
    if (!business) throw notFound();
    return { business };
  },
  head: ({ loaderData }) => {
    const b = loaderData?.business;
    if (!b) return { meta: [{ title: "Business — Iresha Holdings" }] };
    return {
      meta: [
        { title: `${b.title} — Iresha Holdings` },
        { name: "description", content: b.description },
        { property: "og:title", content: `${b.title} — Iresha Holdings` },
        { property: "og:description", content: b.description },
        { property: "og:image", content: b.image },
        { property: "og:url", content: `/business/${b.slug}` },
      ],
      links: [{ rel: "canonical", href: `/business/${b.slug}` }],
    };
  },
  component: BusinessDetailPage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center">
      <p>Business not found.</p>
    </div>
  ),
});

function BusinessDetailPage() {
  const { business } = Route.useLoaderData() as { business: Business };
  const Icon = ICONS[business.icon as keyof typeof ICONS];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img
          src={business.image}
          alt={business.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/40" />
        <div className="absolute inset-0 flex items-end">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 text-gold">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 backdrop-blur">
                  <Icon size={20} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  {business.tagline}
                </span>
              </div>
              <h1 className="mt-4 max-w-3xl font-display text-4xl text-white md:text-6xl">
                {business.title}
              </h1>
              <p className="mt-4 max-w-2xl pb-12 text-white/80">{business.description}</p>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <Reveal>
              <SectionHeading eyebrow="Overview" title="What we do" />
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-2">
              <p className="text-lg leading-relaxed text-foreground">{business.longDescription}</p>
            </Reveal>
          </div>

          {/* Achievements */}
          <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
            {business.achievements.map((a) => (
              <motion.div
                variants={itemVariants}
                key={a.label}
                className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft"
              >
                <div className="font-display text-5xl text-gold-gradient">{a.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {a.label}
                </div>
              </motion.div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-mist py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Services" title={`What ${business.title} offers`} />
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
            {business.services.map((s) => (
              <motion.div
                variants={itemVariants}
                key={s.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold/15 text-gold">
                  <Check size={18} />
                </div>
                <div>
                  <h4 className="font-display text-lg text-navy">{s.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Gallery */}
      <section className="bg-background py-24">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Gallery" title="A glimpse inside" />
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
            {business.gallery.map((src, i) => (
              <motion.div
                variants={itemVariants}
                key={i}
                className="group overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={src}
                  alt={`${business.title} ${i + 1}`}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy-gradient py-20 text-white">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-3xl text-white md:text-4xl">
                Partner with {business.title}
              </h3>
              <p className="mt-2 max-w-xl text-white/70">
                Talk to our team about partnerships, supply, franchising or careers in this business
                unit.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-navy shadow-gold"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>

          {/* Other businesses */}
          <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESSES.filter((b) => b.slug !== business.slug).map((b) => (
              <Link
                key={b.slug}
                to="/business/$slug"
                params={{ slug: b.slug }}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-gold"
              >
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50">Discover</div>
                  <div className="mt-1 font-display text-lg text-white">{b.title}</div>
                </div>
                <ArrowRight
                  size={18}
                  className="text-gold transition-transform group-hover:translate-x-1"
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
