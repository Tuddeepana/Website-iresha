import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ContactSection } from "@/sections/ContactSection";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Iresha Holdings" },
      { name: "description", content: "Contact Iresha Holdings — group office, business units, and partnership enquiries." },
      { property: "og:title", content: "Contact — Iresha Holdings" },
      { property: "og:description", content: "Get in touch with the Iresha Holdings team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-gradient pt-40 pb-20 text-white">
        <div className="absolute inset-0 [background-image:radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.18),transparent_55%)]" />
        <Container>
          <Reveal>
            <div className="flex items-center gap-3"><span className="gold-divider" /><span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Contact</span></div>
            <h1 className="mt-4 max-w-3xl font-display text-4xl text-white md:text-6xl">We'd love to <span className="text-gold-gradient">hear from you</span></h1>
            <p className="mt-6 max-w-2xl text-white/75">Whether you are a customer, supplier, partner or future colleague — we are here to help.</p>
          </Reveal>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
