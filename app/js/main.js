import determineRowHeight from './modules/utils/determineRowHeight/determineRowHeight';
import {setTableWrapperHeight} from './modules/utils/tableWrapperHeight/tableWrapperHeight';
import showTable from './modules/showTable/showTable';
import renderCheckTable from './modules/table/checkTable/renderCheckTable';
import renderChecksInfoTable from './modules/table/checksInfoTable/renderChecksInfoTable';

window.addEventListener('DOMContentLoaded', () => {
  
  if (document.getElementById('checks-page')) {
    const state = {
      currentPage: 1,
    };
    setTableWrapperHeight();
    const rowHeight = determineRowHeight();
    showTable('./tables/checks.json', state, rowHeight, renderCheckTable);
  }

  if (document.getElementById('checks-info')) {
    const state = {
      currentPage: 1,
    };
    setTableWrapperHeight();
    const rowHeight = determineRowHeight();
    showTable('../tables/check_info.json', state, rowHeight, renderChecksInfoTable);
  }
  
  
  

});

