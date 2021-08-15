export default class Spinner {
  constructor(container) {
    this.container = document.querySelector(container);
  }

  render() {
    const spinner = document.createElement('div');
    spinner.className = 'spinner';
    spinner.id = 'spinner';
    spinner.innerHTML = `<div class="loadingio-spinner-spin-52fuiut5mue"><div class="ldio-pla356f8p3">
    <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
    </div></div>`;

    this.container.append(spinner);
  }

  remove() {
    this.container.querySelector('.spinner').remove();
  }
}