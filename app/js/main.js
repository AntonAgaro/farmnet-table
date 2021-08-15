import renderTable from './modules/table/renderTable';
import fetchData from './modules/utils/fetchData/fetchData';
import tableWrapperHeight from './modules/utils/tableWrapperHeight/tableWrapperHeight';

window.addEventListener('DOMContentLoaded', () => {
  let state = {};

  const showChecks = async () => {
    await fetchData('./tables/test.json').then(res => state.cheks = res);

    tableWrapperHeight();
    renderTable(state.cheks, '#table-wrapper');

    
  };

  showChecks();

  

});

