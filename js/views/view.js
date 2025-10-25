export default class view {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.showError();
    this._data = data;
    this._clearHtml();
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  _clearHtml() {
    this._parentElement.innerHTML = "";
  }
  //   this error skiliton is only for left side error section dont use in main error section
  // already i make a other error for main secion
  showError = function () {
    const messageErr = `
            <li class="skeleton-error-item">
              <div class="shimmer-bg"></div>
              <div class="error-icon-box">
                <i class="fas fa-utensils"></i>
              </div>
              <div class="skeleton-details">
                <div class="error-text-title">Recipe Not Found !</div>
                <div class="error-text-shop">Try other one please</div>
              </div>
            </li>

            <li class="skeleton-error-item">
              <div class="shimmer-bg"></div>
              <div class="error-icon-box wifi-error-box">
                <i class="fas fa-wifi"></i>
              </div>
              <div class="skeleton-details">
                <div class="error-text-title">Internet Problem !</div>
                <div class="error-text-shop">Please check your Connection</div>
              </div>
            </li>

            <li class="skeleton-error-item">
              <div class="shimmer-bg"></div>
              <div class="error-icon-box">
                <i class="fas fa-carrot"></i>
              </div>
              <div class="skeleton-details">
                <div class="error-text-title">Ingredient Error</div>
                <div class="error-text-shop">
                  ingredient failed to load: please refresh.
                </div>
              </div>
            </li>
  `;
    this._clearHtml();
    this._parentElement.insertAdjacentHTML("afterbegin", messageErr);
  };
}
