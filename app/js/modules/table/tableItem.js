export default class TableItem {
  constructor(obj, table) {
    this.obj = obj;
    this.table = table;
  }

  render() {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <td>${this.obj.createDate}</td>
        <td>${this.obj.branch}</td>
        <td>${this.obj.operation_type}</td>
        <td>${this.obj.posCount}</td>
        <td>${this.obj.sumQuantity}</td>
        <td>${this.obj.sumRoznWNDS}</td>
      `;
    this.table.append(tableRow);
  }
}