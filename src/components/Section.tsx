import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl container-px ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <div className={`mb-3 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="gold-divider" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</span>
        </div>
      )}
      <h2 className={`font-display text-3xl font-semibold leading-tight md:text-5xl ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
