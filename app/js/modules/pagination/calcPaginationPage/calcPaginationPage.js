const calcPaginationPage = (arr, pageNumber, rowsOnPage) => {
  const start = (pageNumber - 1) * rowsOnPage;
  const end = start + rowsOnPage;

  const rows = arr.slice(start, end);

  return rows;
};

export default calcPaginationPage;