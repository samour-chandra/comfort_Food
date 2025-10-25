class searchView {
  _parentElement = document.querySelector(".search-container");
  _inputElement = this._parentElement.querySelector(".search__input");

  getQuery() {
    const query = this._inputElement.value;
    this._inputElement.value = "";
    return query;
  }

  addSearchHandler(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new searchView();
