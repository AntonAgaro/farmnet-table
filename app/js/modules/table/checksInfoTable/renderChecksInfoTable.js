import checksInfoTableItem from "./checksInfoTableItem";

const renderChecksInfoTable = (arr, wrapper) => {
  const tableWrapper = document.querySelector(wrapper);

  const table = document.createElement('table');
  table.className = 'table-check-info';

  table.innerHTML = `
    <thead>
      <tr>
        <th>Название товара</th>
        <th>Форма выпуска</th>
        <th>Производитель</th>
        <th>Продано товара</th>
        <th>Сумма продажи</th>
        <th>Ставка НДС</th>
        <th>Срок годности</th>
      </tr>
    </thead>
  `;

  arr.forEach(item => {
    new checksInfoTableItem(item, table).render();
  });

  if (document.querySelector('.table-check-info')) {
    document.querySelector('.table-check-info').remove();
  }

  tableWrapper.prepend(table);
};

export default renderChecksInfoTable;