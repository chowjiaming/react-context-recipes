const RecipeListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE_TO_MAKE_LIST":
      return {
        ...state,
        makeList: [action.payload, ...state.makeList],
      };
    case "REMOVE_RECIPE_FROM_MAKE_LIST":
      return {
        ...state,
        makeList: state.makeList.filter(
          (recipe) => recipe.id !== action.payload
        ),
      };
    case "ADD_RECIPE_TO_FINISHED_LIST":
      return {
        ...state,
        makeList: state.makeList.filter(
          (recipe) => recipe.id !== action.payload.id
        ),
        finishedList: [action.payload, ...state.finishedList],
      };
    case "MOVE_TO_MAKE_LIST":
      return {
        ...state,
        finishedList: state.finishedList.filter(
          (recipe) => recipe.id !== action.payload.id
        ),
        makeList: [action.payload, ...state.makeList],
      };
    case "REMOVE_FROM_FINISHED_LIST":
      return {
        ...state,
        finishedList: state.finishedList.filter(
          (recipe) => recipe.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default RecipeListReducer;
