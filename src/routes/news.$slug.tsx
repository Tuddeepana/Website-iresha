import { createFileRoute, notFound } from "@tanstack/react-router";
import { Container } from "@/components/Section";
import { NEWS } from "@/data/news";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/news/$slug")({
  component: NewsArticlePage,
  loader: ({ params }) => {
    const article = NEWS.find((n) => n.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
});

function NewsArticlePage() {
  const article = Route.useLoaderData();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-120 overflow-hidden">
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-navy-gradient" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-navy-deep via-navy-deep/70 to-navy-deep/40" />
        <div className="absolute inset-0 flex items-end">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 text-gold">
                <span className="text-xs font-semibold uppercase tracking-[0.25em]">
                  {article.category}
                </span>
              </div>
              <h1 className="mt-4 max-w-4xl font-display text-4xl text-white md:text-6xl">
                {article.title}
              </h1>
              <div className="mt-6 flex items-center gap-2 pb-12 text-sm text-white/80">
                <Calendar size={16} />
                {article.date}
              </div>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-24">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="lead text-xl text-foreground font-medium mb-8">{article.excerpt}</p>
              {article.content?.map((paragraph: string, index: number) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
