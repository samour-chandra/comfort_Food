class recipeView {
  #parentElement = document.querySelector(".main-content");
  #data;
  render(data) {
    this.#data = data;
    this.#clearHtml();
    const markup = this.#generateMarkup();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  #clearHtml() {
    this.#parentElement.innerHTML = "";
  }

  mainError = function () {
    const messageErr = `
        <div class="main-recipe-error-full">
            <div class="header-line">
              <span class="support-icon">🧑‍🍳</span>
              <p class="error-code">Error: Recipe Dish Missing</p>
            </div>

            <div class="animation-area">
              <div class="pan-animation">
                <div class="pan"></div>
                <div class="egg">🍳</div>
              </div>
            </div>

            <h1 class="main-title-small">Recipe Not Found!</h1>

            <p class="main-message-small">
              The requested dish is currently unavailable. Please **try
              searching using a simpler or different name** to explore our menu.
            </p>

            <a href="/popular" class="button primary-button">
              Explore Popular Dishes
            </a>
        </div>
  `;
    this.#clearHtml();
    this.#parentElement.insertAdjacentHTML("afterbegin", messageErr);
  };

  mainSkeliton = function (parentEl) {
    const skeliton = `
  <div class="main-content">
            <div class="content-skeleton">
              <div class="skeleton-img main-figure shimmer"></div>

              <div class="skeleton-line large-title"></div>

              <div class="skeleton-details-row">
                <div class="skeleton-line detail-info"></div>
                <div class="skeleton-line detail-info"></div>
                <div class="skeleton-line detail-info"></div>
              </div>

              <div class="skeleton-list-grid">
                <div class="skeleton-line ingredient-item"></div>
                <div class="skeleton-line ingredient-item"></div>
                <div class="skeleton-line ingredient-item"></div>
                <div class="skeleton-line ingredient-item"></div>
                <div class="skeleton-line ingredient-item"></div>
                <div class="skeleton-line ingredient-item"></div>
                <div class="skeleton-line ingredient-item"></div>
                <div class="skeleton-line ingredient-item"></div>
                <div class="skeleton-line ingredient-item"></div>
                <div class="skeleton-line ingredient-item"></div>
              </div>
            </div>
          </div>
  `;
    this.#clearHtml();
    this.#parentElement.insertAdjacentHTML("afterbegin", skeliton);
  };

  #generateMarkup() {
    return `
    <div class="recipe-detail-box">
            <figure class="recipe__fig">
              <img
                src="${this.#data.image}"
                alt="Gourmet Dish"
                class="recipe__img"
              />
            </figure>

            <h1 class="recipe__title">
              <span style="white-space: pre-line;">${this.#data.title}</span>
            </h1>

            <div class="recipe__details">
              <div class="recipe__info">
                <span class="icon-placeholder"
                  ><i class="fas fa-clock"></i
                ></span>
                <span class="recipe__info-data recipe__info-data--minutes"
                  >${this.#data.cookingTime}</span
                >
                <span class="recipe__info-text">MINUTES</span>
              </div>

              <div class="recipe__info">
                <span class="icon-placeholder"
                  ><i class="fas fa-users"></i
                ></span>
                <span class="recipe__info-data recipe__info-data--people"
                  >${this.#data.servings}</span
                >
                <span class="recipe__info-text">SERVINGS</span>

                <div class="recipe__info-buttons">
                  <button class="btn--tiny btn--decrease-servings">
                    <span>-</span>
                  </button>
                  <button class="btn--tiny btn--increase-servings">
                    <span>+</span>
                  </button>
                </div>
              </div>

              <button class="btn--round">
                <i class="fas fa-bookmark bookmark-icon"></i>
              </button>
            </div>

            <div class="recipe-main-sections">
              <div class="recipe__ingredients-box">
                <h2 class="heading--2">Ingredients Checklist</h2>
                <ul class="recipe__ingredient-list">
                ${this.#data.ingredients
                  .map(this.#generateMarkupIngradient)
                  .join("")}
                </ul>
              </div>

              <div class="recipe__directions">
                <h2 class="heading--2">How to cook it</h2>
                <p class="recipe__directions-text">
                  This gourmet recipe was lovingly crafted by **${
                    this.#data.publisher
                  }**.
                  Follow the detailed steps below for a stunning result.
                </p>
                <a class="btn--small recipe__btn" href="${
                  this.#data.sourceUrl
                }" target="_blank">
                  <span>VIEW FULL GUIDE</span>
                  <i class="fas fa-arrow-right small-arrow"></i>
                </a>
              </div>
            </div>
          </div>
    `;
  }

  #generateMarkupIngradient(ing) {
    return `<li class="recipe__ingredient">
                    <i class="fas fa-check-circle small-check"></i>
                    <div class="recipe__quantity">${
                      ing.quantity ? ing.quantity : ""
                    }</div>
                    <div class="recipe__description">
                      <span class="recipe__unit">${
                        ing.unit ? ing.unit : "🍳"
                      }</span> Ricotta Cheese
                    </div>
                  </li>`;
  }
}
export default new recipeView();
