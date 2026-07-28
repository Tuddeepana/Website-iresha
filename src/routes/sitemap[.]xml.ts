import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { BUSINESSES } from "@/data/businesses";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          { path: "/", priority: "1.0" },
          { path: "/about", priority: "0.8" },
          { path: "/businesses", priority: "0.8" },
          { path: "/careers", priority: "0.7" },
          { path: "/contact", priority: "0.7" },
          ...BUSINESSES.map((b) => ({ path: `/business/${b.slug}`, priority: "0.6" })),
        ];
        const urls = paths
          .map(
            (p) =>
              `  <url><loc>${BASE_URL}${p.path}</loc><changefreq>weekly</changefreq><priority>${p.priority}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
