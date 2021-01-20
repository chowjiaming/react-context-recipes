import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Your Recipes</Link>
        </li>
        <li>
          <Link to="/finished-recipes">Finished Recipes</Link>
        </li>
        <li>
          <Link to="/search-recipes">Search Recipe</Link>
        </li>
      </ul>
    </header>
  );
}
