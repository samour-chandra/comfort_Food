import * as model from "./model.js";
import recipeView from "./views/mainView.js";
import paginationView from "./views/paginationView.js";
import resultsView from "./views/resultsView.js";
import searchView from "./views/searchView.js";

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
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchReulstPage());
    // retnder the pagination view here
    paginationView.render(model.state.search);
  } catch (err) {
    resultsView.showError();
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // render new results view
  resultsView.render(model.getSearchReulstPage(goToPage));
  // retnder the pagination view here
  paginationView.render(model.state.search);
};

const init = function () {
  searchView.addSearchHandler(controlSearchResults);
  recipeView.addHandlerRender(controlRecipe);
  paginationView.handelPagination(controlPagination);
};

init();
