export default class checkTableItem {
  constructor(obj, table) {
    this.obj = obj;
    this.table = table;
  }

  render() {
    const tableRow = document.createElement('tr');
    const date = new Date(this.obj.createDate);
    tableRow.innerHTML = `
        <td>${date.toLocaleString()}</td>
        <td>${this.obj.branch}</td>
        <td>${this.obj.operation_type}</td>
        <td>${this.obj.posCount}</td>
        <td>${this.obj.sumQuantity}</td>
        <td>${this.obj.sumRoznWNDS}</td>
      `;
    this.table.append(tableRow);
  }
}