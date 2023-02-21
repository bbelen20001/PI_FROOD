import {
  GET_RECIPES,
  GET_DIETS,
  GET_RECIPES_NAME,
  GET_RECIPE_ID,
  CREATE_RECIPE,
  ORDER_AZ,
  ORDER_ZA,
  ORDER_HEALTHSCORE_ASC,
  ORDER_HEALTHSCORE_DESC,
  FILTER_DIETS,
  CLEAR,
  LOADING,
  GET_FILTER,
  ORDERED_RECIPES,
} from "./actions";

const initialState = {
  recipes: [],
  recipesAll: [],
  diets: [],
  recipeDetail: [],
  loading: true,
  favorites: [],
};

const rootReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: actions.payload,
        recipesAll: actions.payload,
        diets: actions.data,
      };

    case GET_RECIPES_NAME:
      const receta = actions.payload;
      return {
        ...state,
        recipesFilters: [...receta],
      };
    case GET_RECIPE_ID:
      return {
        ...state,
        recipe: actions.payload,
      };
    case GET_DIETS:
      return {
        ...state,
        diets: actions.payload,
      };
      case CREATE_RECIPE:
        return {
            ...state,
        };
        case ORDER_AZ:
            let resultAZ = state.recipe.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                return 0;
            });
            return {
                ...state,
                recipe: resultAZ,
            };
        case ORDER_ZA:
            let resultZA = state.recipe.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                return 0;
            });
            return {
                ...state,
                recipe: resultZA,
            };

        case ORDER_HEALTHSCORE_ASC:
            let resultAsc = state.recipe.sort(function (a, b) {
                if (a.healthScore > b.healthScore) return 1;
                if (a.healthScore < b.healthScore) return -1;
                return 0;
            });
            return {
                ...state,
                recipe: resultAsc,
            };
        case ORDER_HEALTHSCORE_DESC:
            let resultDesc = state.recipe.sort(function (a, b) {
                if (a.healthScore > b.healthScore) return -1;
                if (a.healthScore < b.healthScore) return 1;
                return 0;

            });
            return {
                ...state,
                recipe: resultDesc,
            };
        case FILTER_DIETS:

            const filter = state.recipesAll;
            if (actions.payload === "all") {
                return {
                    ...state,
                    recipe: filter,
                }
            } else {
                //console.log(filter,"filter");
                const ff = filter.filter(r => r.diets?.some((d) => d?.toLowerCase() === actions.payload.toLowerCase()))
                return {
                    ...state,
                    recipe: ff,
                }
            };
            case CLEAR:
            return {
                ...state,
                recipeDetail: actions.payload,
            };
            case LOADING:
            return {
                ...state,
                loading: actions.payload,
            };
            case GET_FILTER:
                return {
                  ...state,
                  recipesFilters: actions.payload,
                };
              case ORDERED_RECIPES:
                return {
                  ...state,
                  ordered: !state.ordered,
                };
    default:
      return { ...state };
  }
};

export default rootReducer;
