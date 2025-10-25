import { API_URL, REG_PER_PAGE } from "./config.js";
import { getJson } from "./views/helperfun.js";

export const state = {
  recipe: {},
  search: {
    query: "",
    results: [],
    resultsPerPage: REG_PER_PAGE,
  },
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJson(`${API_URL}${id}`);
    let { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
  } catch (err) {
    throw err;
  }
};

export const loadSearchRecipe = async function (query) {
  try {
    state.search.query = query;
    const data = await getJson(`${API_URL}?search=${query}`);
    state.search.results = data.data.recipes.map((ing) => {
      return {
        id: ing.id,
        title: ing.title,
        publisher: ing.publisher,
        image: ing.image_url,
      };
    });
  } catch (err) {
    throw err;
  }
};

export const getSearchReulstPage = function (page) {
  const starIndex = (page - 1) * state.search.resultsPerPage;
  const endIndex = page * state.search.resultsPerPage;
  return state.search.results.slice(starIndex, endIndex);
};
