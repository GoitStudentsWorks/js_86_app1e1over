import { Update } from '../RecepieCards/RecepieCards';
import Pagination from './Helper-pagination'


// PAGINATION
const paginationContainer = document.querySelector(".pagination ul");

// let pageCount;
// let pageIndex;

export function createPagination(pageCount, pageIndex, onRender) {
  new Pagination({
  container: paginationContainer,
  count: pageCount,
  index: pageIndex,
  onRender,
});
}

