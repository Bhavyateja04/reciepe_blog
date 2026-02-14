import { MetadataRoute } from "next";

const recipes = [
  "classic-paella",
  "french-ratatouille",
];

const locales = ["en", "es", "fr"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "http://localhost:3000";

  const urls = [];

  // Add homepage + recipes page
  for (const locale of locales) {
    urls.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
    });

    urls.push({
      url: `${baseUrl}/${locale}/recipes`,
      lastModified: new Date(),
    });

    for (const slug of recipes) {
      urls.push({
        url: `${baseUrl}/${locale}/recipes/${slug}`,
        lastModified: new Date(),
      });
    }
  }

  return urls;
}
