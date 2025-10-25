import view from "./view.js";

class resultView extends view {
  _parentElement = document.querySelector(".food-list");

  //   Render the search results
  _generateMarkup() {
    return this._data.map(this._recipeMarkupPreview).join("");
  }

  _recipeMarkupPreview(result) {
    return `
        <li class="food-item">
            <a href="#${result.id}" class="food-link">
                <img src="${result.image}" alt="Chicken Biryani" />
                <div class="item-details">
                <h3 class="food-title">${result.title}</h3>
                <p class="shop-name">${result.publisher}</p>
                </div>
            </a>
        </li>
    `;
  }

  //   render the left side skeliton/loging
  listSkeliton = function () {
    const skeliton = `
            <li class="search-result-item skeleton-list-item">
              <div class="skeleton-image-placeholder"></div>
              <div class="item-details">
                <div class="item-title skeleton-line short"></div>
                <div class="item-desc skeleton-line full"></div>
              </div>
            </li>

            <li class="search-result-item skeleton-list-item">
              <div class="skeleton-image-placeholder"></div>
              <div class="item-details">
                <div class="item-title skeleton-line short"></div>
                <div class="item-desc skeleton-line full"></div>
              </div>
            </li>

            <li class="search-result-item skeleton-list-item">
              <div class="skeleton-image-placeholder"></div>
              <div class="item-details">
                <div class="item-title skeleton-line short"></div>
                <div class="item-desc skeleton-line full"></div>
              </div>
            </li>

            <li class="search-result-item skeleton-list-item">
              <div class="skeleton-image-placeholder"></div>
              <div class="item-details">
                <div class="item-title skeleton-line short"></div>
                <div class="item-desc skeleton-line full"></div>
              </div>
            </li>
             <li class="search-result-item skeleton-list-item">
              <div class="skeleton-image-placeholder"></div>
              <div class="item-details">
                <div class="item-title skeleton-line short"></div>
                <div class="item-desc skeleton-line full"></div>
              </div>
            </li>

            <li class="search-result-item skeleton-list-item">
              <div class="skeleton-image-placeholder"></div>
              <div class="item-details">
                <div class="item-title skeleton-line short"></div>
                <div class="item-desc skeleton-line full"></div>
              </div>
            </li>
             `;
    this._clearHtml();
    this._parentElement.insertAdjacentHTML("afterbegin", skeliton);
  };
}
export default new resultView();
