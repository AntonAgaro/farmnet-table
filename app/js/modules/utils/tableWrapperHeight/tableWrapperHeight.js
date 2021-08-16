const setTableWrapperHeight = () => {
  const tableWrapper = document.querySelector('#table-wrapper');
  tableWrapper.style.minHeight = `${window.innerHeight - tableWrapper.offsetTop}px`; 
};

const setTableContainerHeight = () => {
  const tableContainer = document.querySelector('#table-container');
  //16 is gap size in the table-wrapper
  const calcHeight = `${window.innerHeight - tableContainer.offsetTop - 35 - 16}px`;
  tableContainer.style.minHeight = calcHeight; 
  return calcHeight;
};



export  {setTableWrapperHeight, setTableContainerHeight};
