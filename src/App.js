import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecipeListProvider } from "./helpers/RecipeListContext";
import Navbar from "./components/Navbar";
import YourRecipes from "./components/YourRecipes";
import FinishedRecipes from "./components/FinishedRecipes";
import SearchRecipes from "./components/SearchRecipes";

function App() {
  return (
    <div className="App">
      <RecipeListProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <YourRecipes />
            </Route>
            <Route path="/finished-recipes">
              <FinishedRecipes />
            </Route>
            <Route path="/search-recipes">
              <SearchRecipes />
            </Route>
          </Switch>
        </Router>
      </RecipeListProvider>
    </div>
  );
}

export default App;
