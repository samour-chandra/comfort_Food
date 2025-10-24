// Updated Data array for 12 custom food UI cards with a common image URL
const foodRecipes = [
  {
    id: 1,
    name: "Golden Pancakes",
    time: "25 Min",
    difficulty: "Easy",
    image_url: "images/download14.jpeg",
    overlay_text: "Search this Item",
  },
  {
    id: 2,
    name: "Avocado Toast",
    time: "10 Min",
    difficulty: "Very Easy",
    image_url: "images/download4.jpeg",
    overlay_text: "Search this Item",
  },
  {
    id: 3,
    name: "Beef Steak",
    time: "45 Min",
    difficulty: "Medium",
    image_url: "images/download.5.jpeg",
    overlay_text: "Search this Item",
  },
  {
    id: 4,
    name: "Panna Cotta",
    time: "3 Hours",
    difficulty: "Hard",
    image_url: "images/download15.jpeg",
    overlay_text: "Search this Item",
  },
  {
    id: 5,
    name: "Shrimp Pasta",
    time: "30 Min",
    difficulty: "Medium",
    image_url: "images/download6.jpeg",
    overlay_text: "Search this Item",
  },
  {
    id: 6,
    name: "Vegetable Curry",
    time: "50 Min",
    difficulty: "Hard",
    image_url: "images/download7.jpeg",
    overlay_text: "Search this Item",
  },
  {
    id: 7,
    name: "Fruit Smoothie",
    time: "5 Min",
    difficulty: "Very Easy",
    image_url: "images/download8.jpeg",
    overlay_text: "Search this Item",
  },
  {
    id: 8,
    name: "Roast Chicken",
    time: "90 Min",
    difficulty: "Medium",
    image_url: "images/download9.jpeg",
    overlay_text: "Search this Item",
  },
  {
    id: 9,
    name: "Vegetable Stir Fry",
    time: "35 Min",
    difficulty: "Medium",
    image_url: "images/download10.jpeg",
    overlay_text: "Search this Item",
  },
  {
    id: 10,
    name: "Fish Tacos",
    time: "20 Min",
    difficulty: "Easy",
    image_url: "images/download11.jpeg",
    overlay_text: "Search this Item",
  },
  {
    id: 11,
    name: "Chocolate Cake",
    time: "1 Hour",
    difficulty: "Hard",
    image_url: "images/download12.jpeg",
    overlay_text: "Search this Item",
  },
  {
    id: 12,
    name: "Classic Pizza",
    time: "55 Min",
    difficulty: "Medium",
    image_url: "images/download13.jpeg",
    overlay_text: "Search this Item",
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
                    <i class="fas fa-search custom-food-ui-search-icon"></i>
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
