const determineRowHeight = () => {
  const windowWidth = document.documentElement.clientWidth;
  let rowHeight;

  if (windowWidth >= 1200) {
    rowHeight = 21;
  } else if (windowWidth >= 800){
    rowHeight = 16;
  } else {
    rowHeight = 30;
  }
  

  return rowHeight;
};

export default determineRowHeight;
