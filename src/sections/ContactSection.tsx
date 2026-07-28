import { Mail, Phone, MapPin } from "lucide-react";
import { SITE } from "@/data/site";
import { Container, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="bg-mist py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let's build something enduring"
            description="Reach out to our group office or the management team of any of our business units. We respond within one business day."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5 rounded-2xl bg-navy-gradient p-8 text-white shadow-elevated">
              <h3 className="font-display text-2xl text-white">Group Head Office</h3>
              <p className="text-sm text-white/70">
                Visit us at our Colombo headquarters or get in touch through any of the channels
                below.
              </p>

              <div className="mt-4 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Office</div>
                    <div className="text-white/70">{SITE.address}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-white/70 space-y-1">
                      {SITE.phone.map((p, i) => (
                        <a
                          key={i}
                          href={`tel:${p.replace(/[^0-9]/g, "")}`}
                          className="block hover:text-gold"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>{" "}
                    <div className="flex flex-col text-white/70">
                      {SITE.email.map((e, i) => {
                        const emailOnly = e.split("–")[1]?.trim(); // extract actual email
                        return (
                          <a key={i} href={`mailto:${emailOnly}`} className="hover:text-gold">
                            {e}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" id="name" placeholder="Jane Perera" />
                <Field label="Email" id="email" type="email" placeholder="you@company.com" />
                <Field
                  label="Subject"
                  id="subject"
                  placeholder="Partnership enquiry"
                  className="sm:col-span-2"
                />
                <div className="sm:col-span-2">
                  <label htmlFor="msg" className="text-sm font-medium text-navy">
                    Message
                  </label>
                  <textarea
                    id="msg"
                    rows={5}
                    placeholder="Tell us a little about your enquiry…"
                    className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-navy px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 aspect-[16/7] overflow-hidden rounded-2xl border border-border bg-muted">
              <iframe
                title="Iresha Holdings location"
                aria-label="Map"
                src="https://maps.google.com/maps?q=Iresha+Filling+Station+(pvt)+Ltd&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  className = "",
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
