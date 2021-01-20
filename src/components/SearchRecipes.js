import { useState } from "react";
import useFetchRecipes from "../helpers/useFetchRecipes";

export default function SearchRecipes() {
  const [query, setQuery] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };
  const { recipes, isLoading, error } = useFetchRecipes(query);
  let searchReturnContent;

  if (error) console.log(error);

  if (isLoading) {
    searchReturnContent = <p>Loading...</p>;
  } else if (!isLoading && recipes.length === 0) {
    searchReturnContent = <p>Sorry, no recipes found with {query}</p>;
  } else {
    searchReturnContent = (
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.idMeal}>{recipe.strMeal}</li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search Recipes by Ingredient"
        value={query}
        onChange={onChange}
      />
      {searchReturnContent}
    </div>
  );
}
