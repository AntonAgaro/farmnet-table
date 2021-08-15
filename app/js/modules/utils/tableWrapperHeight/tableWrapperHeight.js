const tableWrapperHeight = () => {
  const tableWrapper = document.querySelector('#table-wrapper');
  tableWrapper.style.height = `${window.innerHeight - tableWrapper.offsetTop}px`; 
};

export default tableWrapperHeight;
