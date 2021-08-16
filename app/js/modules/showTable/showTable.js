import renderCheckTable from '../table/checkTable/renderCheckTable';
import fetchData from '../utils/fetchData/fetchData';
import {setTableContainerHeight} from '../utils/tableWrapperHeight/tableWrapperHeight';
import {PaginationButtons} from '../pagination/paginationButtons/paginationButtons';
import calcPaginationPage from '../pagination/calcPaginationPage/calcPaginationPage';
import Spinner from '../spinner/spinner';

const showTable = async (url, state, rowHeight, renderFunc) => {
  const spinner = new Spinner('#table-container');
  spinner.render();

  await fetchData(url)
    .then(res => state.checks = res);

  const tableContainerHeight = setTableContainerHeight();
  const numOfRowsFit = Math.floor((parseInt(tableContainerHeight) / rowHeight) - 1);
  const numOfPages = Math.floor(state.checks.length / numOfRowsFit);

  const tableWrapper = document.querySelector('#table-wrapper');
  const paginationButtons = new PaginationButtons(numOfPages, numOfPages <= 5 ? numOfPages : 5);
  paginationButtons.render(tableWrapper);
  calcPaginationPage(state.checks, state.currentPage, numOfRowsFit);
  
  renderFunc(calcPaginationPage(state.checks, state.currentPage, numOfRowsFit), '#table-container');

  spinner.remove();

  paginationButtons.onChange(e => {
    state.currentPage = e.currentTarget.value;
    calcPaginationPage(state.checks, state.currentPage, numOfRowsFit);
    renderFunc(calcPaginationPage(state.checks, state.currentPage, numOfRowsFit), '#table-container');
  });
};

export default showTable;