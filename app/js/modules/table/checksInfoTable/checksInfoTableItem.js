export default class checksInfoTableItem {
  constructor(obj, table) {
    this.obj = obj;
    this.table = table;
  }

  render() {
    const tableRow = document.createElement('tr');
    const date = this.obj.srokG.slice(0, this.obj.srokG.search(/T/));

    tableRow.innerHTML = `
    <td>${this.obj.drug}</td>
    <td>${this.obj.form}</td>
    <td>${this.obj.fabr}</td>
    <td>${this.obj.quantity}</td>
    <td>${this.obj.sumRoznWNDS}</td>
    <td>${this.obj.nds}</td>
    <td>${date}</td>
    `;

    this.table.append(tableRow);
  }
}