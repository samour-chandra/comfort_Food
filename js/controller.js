import * as model from "./model.js";
import recipeView from "./views/mainView.js";

const recipeContainer = document.querySelector(".main-content");

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////

// render main recipe

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    // Render saliton
    recipeView.mainSkeliton();
    console.log("this is testing the id is workig or not");
    //load the recipe
    await model.loadRecipe(id);
    const { recipe } = model.state;
    recipeView.render(model.state.recipe);
    // rendaring recipe
  } catch (err) {
    recipeView.mainError();
    console.log(err + "this is the erro");
  }
};
window.addEventListener("hashchange", controlRecipe);
// controlRecipe();
