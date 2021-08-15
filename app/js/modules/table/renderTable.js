import TableItem from "./tableItem";

const renderTable = (arr, wrapper) => {
  const tableWrapper = document.querySelector(wrapper);

  const table = document.createElement('table');
  table.className = 'table';
  table.innerHTML = `
    <caption>Список чеков</caption>
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

  arr.forEach( (item, index) => {
    new TableItem(item, table).render();
  });

  tableWrapper.append(table);
}

export default renderTable;