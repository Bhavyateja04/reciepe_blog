import Image from "next/image";

const recipes = [
  {
    slug: "classic-paella",
    title: "Classic Paella",
    ingredients: "Rice, Seafood, Saffron",
    instructions: "Cook rice. Add seafood. Simmer with saffron.",
    image:
      "https://images.unsplash.com/photo-1604908177522-040ad8a0b94c",
  },
  {
    slug: "french-ratatouille",
    title: "French Ratatouille",
    ingredients: "Eggplant, Zucchini, Tomato",
    instructions: "Slice vegetables. Layer them. Bake slowly.",
    image:
      "https://images.unsplash.com/photo-1604908177522-040ad8a0b94c",
  },
];

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return <div>Recipe Not Found</div>;
  }

  const currentUrl = `http://localhost:3000/en/recipes/${slug}`;

  return (
    <div>
      <h1 data-testid="recipe-title">{recipe.title}</h1>

      <a
        data-testid="social-share-twitter"
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          currentUrl
        )}&text=${encodeURIComponent(recipe.title)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Twitter
      </a>

      <h2>Ingredients</h2>
      <div data-testid="recipe-ingredients">
        {recipe.ingredients}
      </div>

      <h2>Instructions</h2>
      <div data-testid="recipe-instructions">
        {recipe.instructions}
      </div>

      <Image
        src={recipe.image}
        width={600}
        height={400}
        alt={recipe.title}
      />
    </div>
  );
}
