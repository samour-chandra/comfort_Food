import view from "./view.js";

class paginationView extends view {
  _parentElement = document.querySelector(".pagination-controls");

  handelPagination(handel) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".pageination-button");
      if (!btn) return;
      const goToPage = btn.dataset.goto;
      handel(+goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    if (curPage === 1 && numPages > 1)
      return `<button data-goto="${
        curPage + 1
      }" class="next-button pageination-button">page ${
        curPage + 1
      } &rarr;</button>`;
    if (curPage === numPages && numPages > 1)
      return `<button data-goto="${
        curPage - 1
      }" class="prev-button pageination-button">&larr; page ${
        curPage - 1
      }</button`;
    if (curPage < numPages)
      return `
            <button data-goto="${
              curPage - 1
            }" class="prev-button pageination-button">&larr; ${
        curPage - 1
      } page</button>

            <button data-goto="${
              curPage + 1
            }" class="next-button pageination-button">page ${
        curPage + 1
      } &rarr;</button>
`;
    // only hage 1 pages
    return "";
  }
}

export default new paginationView();
