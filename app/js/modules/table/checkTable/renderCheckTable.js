import checkTableItem from "./checkTableItem";

const renderCheckTable = (arr, wrapper) => {
  const tableWrapper = document.querySelector(wrapper);

  const table = document.createElement('table');
  table.className = 'table';
  table.innerHTML = `
    <thead>
      <tr>
        <th>Дата продажи</th>
        <th>Филиал</th>
        <th>Тип документа</th>
        <th>Позиций в чеке</th>
        <th>Продано товара</th>
        <th>Сумма чека</th>
      </tr>
    </thead>
  `;

  arr.forEach( (item) => {
    new checkTableItem(item, table).render();
  });

  if (document.querySelector('.table')) {
    document.querySelector('.table').remove();
  }

  tableWrapper.prepend(table);
};

export default renderCheckTable;