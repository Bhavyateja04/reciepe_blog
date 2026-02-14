import Link from "next/link";
import NewsletterForm from "../components/NewsletterForm";

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const recipes = [
    { slug: "classic-paella", title: "Classic Paella" },
    { slug: "french-ratatouille", title: "French Ratatouille" },
  ];

  return (
    <>
      <div
        data-testid="featured-recipes"
        className="grid md:grid-cols-2 gap-6"
      >
        {recipes.map((recipe) => (
          <div
            key={recipe.slug}
            data-testid="recipe-card"
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">
              {recipe.title}
            </h2>

            <Link
              href={`/${locale}/recipes/${recipe.slug}`}
              className="text-blue-600 hover:underline"
            >
              View Recipe →
            </Link>
          </div>
        ))}
      </div>

      <NewsletterForm />
    </>
  );
}
