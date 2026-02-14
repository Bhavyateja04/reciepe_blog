"use client";

import { useState } from "react";

export default function RecipesPage() {
  const allRecipes = [
    { id: 1, title: "Classic Paella", category: "Spanish" },
    { id: 2, title: "Ratatouille", category: "French" },
  ];

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filtered = allRecipes.filter(
    (r) =>
      r.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? r.category === category : true)
  );

  return (
    <div>
      <input
        data-testid="search-input"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        data-testid="category-filter"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
      </select>

      {filtered.map((recipe) => (
        <div key={recipe.id} data-testid="recipe-card">
          {recipe.title}
        </div>
      ))}
    </div>
  );
}
