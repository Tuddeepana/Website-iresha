import { createFileRoute, notFound } from "@tanstack/react-router";
import { Container } from "@/components/Section";
import { NEWS } from "@/data/news";
import { Calendar } from "lucide-react";

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
      <section className="bg-mist py-24 pb-12">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-block rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              {article.category}
            </div>
            <h1 className="font-display text-4xl font-bold text-navy md:text-5xl lg:text-6xl">
              {article.title}
            </h1>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar size={16} />
              {article.date}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-12">
        <Container>
          <div className="mx-auto max-w-4xl">
            {article.image && (
              <div className="overflow-hidden rounded-3xl shadow-elevated mb-12">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="lead text-xl text-foreground font-medium mb-8">
                {article.excerpt}
              </p>
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
