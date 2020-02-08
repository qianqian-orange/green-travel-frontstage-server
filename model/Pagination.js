class Pagination {
  constructor({
    pageSize,
    currentPage,
  }) {
    this.pageSize = +pageSize;
    this.currentPage = +currentPage;
  }
}

module.exports = Pagination;