import { PARTNER_LOGOS } from "@/data/logos";

export function LogoSlider() {
  const loop = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-12 py-4">
        {loop.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="grid h-16 min-w-[200px] place-items-center rounded-xl border border-border/60 px-6 font-display text-lg font-semibold tracking-wider text-muted-foreground/60 transition-colors hover:text-navy"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
