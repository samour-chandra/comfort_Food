// Updated Data array for 12 custom food UI cards with a common image URL
const foodRecipes = [
  {
    id: 1,
    name: "Pizza Quesadillas (aka Pizzadillas)", // Purono: Panna Cotta
    time: "3 Hours",
    difficulty: "Hard",
    image_url:
      "http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg",
    overlay_text: "Search this Item",
    recipe_url: "#664c8f193e7aa067e94e84c2", // URL changed
  },
  {
    id: 2,
    name: "Best Pizza Dough Ever", // Purono: Avocado Toast
    time: "10 Min",
    difficulty: "Very Easy",
    image_url:
      "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
    overlay_text: "Search this Item",
    recipe_url: "#664c8f193e7aa067e94e8704", // URL changed
  },
  {
    id: 3,
    name: "Fig-Prosciutto Pizza with Arugula", // Purono: Beef Steak
    time: "45 Min",
    difficulty: "Medium",
    image_url:
      "http://forkify-api.herokuapp.com/images/5278973957_3f9f9a21c2_o7a1b.jpg",
    overlay_text: "Search this Item",
    recipe_url: "#664c8f193e7aa067e94e866f", // URL changed
  },
  {
    id: 4,
    name: "PW’s Favorite Pizza", // Purono: Golden Pancakes
    time: "25 Min",
    difficulty: "Easy",
    image_url:
      "http://forkify-api.herokuapp.com/images/4364270576_302751a2a4f3c1.jpg",
    overlay_text: "Search this Item",
    recipe_url: "#664c8f193e7aa067e94e86ba", // URL changed
  },
  {
    id: 5,
    name: "Deep Dish Fruit Pizza", // Purono: Shrimp Pasta
    time: "30 Min",
    difficulty: "Medium",
    image_url: "	http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg",
    overlay_text: "Search this Item",
    recipe_url: "#664c8f193e7aa067e94e8658", // URL changed
  },
  {
    id: 6,
    name: "New England Lobster Rolls Recipe", // Purono: Vegetable Stir Fry
    time: "35 Min",
    difficulty: "Medium",
    image_url:
      "http://forkify-api.herokuapp.com/images/30416_RecipeImage_620x413_new_england_lobster_rolls353f.jpg",
    overlay_text: "Search this Item",
    recipe_url: "#664c8f193e7aa067e94e89cc", // URL changed
  },

  {
    id: 7,
    name: "Roasted vegetable lasagne", // Purono: Fish Tacos
    time: "20 Min",
    difficulty: "Easy",
    image_url: "http://forkify-api.herokuapp.com/images/10603_MEDIUMdd72.jpg",
    overlay_text: "Search this Item",
    recipe_url: "#664c8f193e7aa067e94e8ad2", // URL changed
  },

  {
    id: 8,
    name: "Pork and Chorizo Chile Burger Recipe", // Eita aage thekei boro chilo
    time: "90 Min",
    difficulty: "Medium",
    image_url:
      "http://forkify-api.herokuapp.com/images/29725_pork_chorizo_chile_burger_620ee6b.jpg",
    overlay_text: "Search this Item",
    recipe_url: "#664c8f193e7aa067e94e8451", // URL changed
  },
  {
    id: 9,
    name: "Actually Delicious Turkey Burgers", // Purono: Vegetable Curry
    time: "50 Min",
    difficulty: "Hard",
    image_url: "http://forkify-api.herokuapp.com/images/6661337708.jpg",
    overlay_text: "Search this Item",
    recipe_url: "#664c8f193e7aa067e94e8895", // URL changed
  },
  {
    id: 10,
    name: "Green Juice", // Purono: Fruit Smoothie
    time: "5 Min",
    difficulty: "Very Easy",
    image_url: "http://forkify-api.herokuapp.com/images/IMG_00293ef0.png",
    overlay_text: "Search this Item",
    recipe_url: "#664c8f193e7aa067e94e845d", // URL changed
  },

  {
    id: 11,
    name: "Pineapple", // Purono: Chocolate Cake
    time: "1 Hour",
    difficulty: "Hard",
    image_url: "images/download12.jpeg",
    overlay_text: "Search this Item",
    recipe_url: "#664c8f193e7aa067e94e86ba", // Duplicate URL to match the count
  },
  {
    id: 12,
    name: "Blackberry", // Purono: Classic Pizza
    time: "55 Min",
    difficulty: "Medium",
    image_url: "images/download13.jpeg",
    overlay_text: "Search this Item",
    recipe_url: "#664c8f193e7aa067e94e8704", // Duplicate URL to match the count
  },
];
// Render the first main ul cards

function renderCards() {
  const grid = document.querySelector(".custom-food-ui-card-grid");
  // cheack kora hocce je grid exgist kore ki na
  if (grid) {
    foodRecipes.forEach((recipe, index) => {
      const cardHTML = `
            <div class="custom-food-ui-card custom-slide-in" style="animation-delay: ${
              index * 0.1
            }s;">
                <div class="custom-food-ui-image-wrapper">
                    <img src="${recipe.image_url}" alt="${recipe.name}">
                    <div class="custom-food-ui-details">
                        <span class="custom-detail-item"><i class="fas fa-clock"></i> ${
                          recipe.time
                        }</span>
                        <span class="custom-detail-item"><i class="fas fa-layer-group"></i> ${
                          recipe.difficulty
                        }</span>
                    </div>
                </div>
                <div class="custom-food-ui-card-overlay">
                    <h3 class="custom-food-ui-overlay-title">${recipe.name}</h3>
                    <a href="${
                      recipe.recipe_url
                    }"><i class="fas fa-search custom-food-ui-search-icon"></i></a>
                    <span class="custom-food-ui-overlay-text">${
                      recipe.overlay_text
                    }</span>
                </div>
            </div>
        `;
      grid.innerHTML += cardHTML;
    });
  }
}

renderCards();
