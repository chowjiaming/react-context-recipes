import { useReducer, useEffect } from "react";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { isLoading: true, recipes: [] };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        isLoading: false,
        recipes: action.payload.recipes,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        recipes: [],
      };
    default:
      return state;
  }
}

export default function useFetchRecipes(query) {
  const [state, dispatch] = useReducer(reducer, {
    recipes: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetchNewData = () => {
      dispatch({ type: ACTIONS.MAKE_REQUEST });
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.meals === null) {
            dispatch({
              type: ACTIONS.GET_DATA,
              payload: { recipes: [] },
            });
          } else {
            dispatch({
              type: ACTIONS.GET_DATA,
              payload: { recipes: data.meals },
            });
          }
        })
        .catch((error) => {
          dispatch({ type: ACTIONS.ERROR, payload: { error } });
        });
    };
    fetchNewData();
  }, [query]);

  return state;
}
