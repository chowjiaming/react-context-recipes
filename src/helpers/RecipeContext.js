import React, { createContext, useReducer, useEffect } from "react";
import RecipeReducer from "./RecipeReducer";

// declare initial state from localstorage
const initialState = {
  makeList: localStorage.getItem("makeList")
    ? JSON.parse(localStorage.getItem("makeList"))
    : [],
  finishedList: localStorage.getItem("finishedList")
    ? JSON.parse(localStorage.getItem("finishedList"))
    : [],
};

// create global app context
export const RecipeContext = createContext(initialState);

// export provider components
export const RecipeProvider = (props) => {
  const [state, dispatch] = useReducer(RecipeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("makeList", JSON.stringify(state.makeList));
    localStorage.setItem("finishedList", JSON.stringify(state.finishedList));
  }, [state]);

  // app reducer actions
  const addRecipeToMakeList = (recipe) => {
    dispatch({ type: "ADD_RECIPE_TO_MAKE_LIST", payload: recipe });
  };
  const removeRecipeFromMakeList = (id) => {
    dispatch({ type: "REMOVE_RECIPE_FROM_MAKE_LIST", payload: id });
  };
  const addRecipeToFinishedList = (recipe) => {
    dispatch({ type: "ADD_RECIPE_TO_FINISHED_LIST", payload: recipe });
  };
  const moveToMakeList = (recipe) => {
    dispatch({ type: "MOVE_TO_MAKE_LIST", payload: recipe });
  };
  const removeFromFinishedList = (id) => {
    dispatch({ type: "REMOVE_FROM_FINISHED_LIST", payload: id });
  };

  return (
    <RecipeContext.Provider
      value={{
        makeList: state.makeList,
        finishedList: state.finishedList,
        addRecipeToMakeList,
        removeRecipeFromMakeList,
        addRecipeToFinishedList,
        moveToMakeList,
        removeFromFinishedList,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};
