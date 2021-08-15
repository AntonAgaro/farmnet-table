import renderTable from './modules/table/renderTable';
import fetchData from './modules/utils/fetchData/fetchData';
import {setTableWrapperHeight, setTableContainerHeight} from './modules/utils/tableWrapperHeight/tableWrapperHeight';
import {PaginationButtons} from './modules/pagination/paginationButtons/paginationButtons';
import calcPaginationPage from './modules/pagination/calcPaginationPage/calcPaginationPage';
import determineRowHeight from './modules/utils/determineRowHeight/determineRowHeight';


window.addEventListener('DOMContentLoaded', () => {

  setTableWrapperHeight();

  let state = {
    currentPage: 1,
  };

  const rowHeight = determineRowHeight();
  console.log(rowHeight);

  const showChecks = async () => {
    await fetchData('./tables/checks.json')
      .then(res => state.checks = res);

    const tableContainerheight = setTableContainerHeight();
    const numOfRowsFit = Math.floor((parseInt(tableContainerheight) / rowHeight) - 1);
    const numOfPages = Math.floor(state.checks.length / numOfRowsFit);
    console.log(numOfRowsFit);

    const tableWrapper = document.querySelector('#table-wrapper');
    const paginationButtons = new PaginationButtons(numOfPages, numOfPages <= 5 ? numOfPages : 5);
    paginationButtons.render(tableWrapper);

    calcPaginationPage(state.checks, state.currentPage, numOfRowsFit);
    renderTable(calcPaginationPage(state.checks, state.currentPage, numOfRowsFit), '#table-container'); 

    paginationButtons.onChange(e => {
      state.currentPage = e.currentTarget.value;
      calcPaginationPage(state.checks, state.currentPage, numOfRowsFit);
      renderTable(calcPaginationPage(state.checks, state.currentPage, numOfRowsFit), '#table-container');
    });
  

  };

  showChecks();
  
  

});

