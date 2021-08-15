const setTableWrapperHeight = () => {
  const tableWrapper = document.querySelector('#table-wrapper');
  tableWrapper.style.height = `${window.innerHeight - tableWrapper.offsetTop}px`; 
};

const setTableContainerHeight = () => {
  const tableContainer = document.querySelector('#table-container');
  // const pagination = document.querySelector('.pagination-buttons');
  // const paginationHeight = window.getComputedStyle(pagination).height;
  //16 is gap size in the table-wrapper
  const calcHeight = `${window.innerHeight - tableContainer.offsetTop - 35 - 16}px`;
  tableContainer.style.height = calcHeight; 
  return calcHeight;
};



export  {setTableWrapperHeight, setTableContainerHeight};
