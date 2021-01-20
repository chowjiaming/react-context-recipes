import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecipeProvider } from "./helpers/RecipeContext";
import Navbar from "./components/Navbar";
import YourRecipes from "./components/YourRecipes";
import FinishedRecipes from "./components/FinishedRecipes";
import SearchRecipes from "./components/SearchRecipes";

function App() {
  return (
    <div className="App">
      <RecipeProvider>
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
      </RecipeProvider>
    </div>
  );
}

export default App;
