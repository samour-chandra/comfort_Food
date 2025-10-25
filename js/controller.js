import * as model from "./model.js";
import recipeView from "./views/mainView.js";
import resultsView from "./views/resultsView.js";
import searchView from "./views/searchView.js";

const recipeContainer = document.querySelector(".main-content");

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

// render main recipe

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    // Render saliton
    recipeView.mianSkeliton();
    //load the recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;
    recipeView.render(model.state.recipe);
    // rendaring recipe
  } catch (err) {
    recipeView.showError(err);
  }
};
// Control search results

const controlSearchResults = async function () {
  try {
    // get query
    const query = searchView.getQuery();
    if (!query) return;
    // render spinner
    resultsView.listSkeliton();
    // push query for get items
    await model.loadSearchRecipe(query);
    // render the search reicpe
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchReulstPage(1));
  } catch (err) {
    resultsView.showError();
    console.error(err);
  }
};

const init = function () {
  searchView.addSearchHandler(controlSearchResults);
  recipeView.addHandlerRender(controlRecipe);
};

init();
