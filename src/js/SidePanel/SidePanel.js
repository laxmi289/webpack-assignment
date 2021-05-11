import './SidePanel.scss';

class SidePanel {
  bodyEl = document.createElement('div');
  sidePanelEl = document.createElement('div');

  categoryEl = document.createElement('div');
  priceEl = document.createElement('div');
  searchEl = document.createElement('div');

  constructor() {
    this.bodyEl.setAttribute('id', 'body');
    this.sidePanelEl.setAttribute('id', 'side-panel-container');
    this.categoryEl.setAttribute('id', 'catogories');
    this.priceEl.setAttribute('id', 'price');
    this.searchEl.setAttribute('id', 'search');

    this.sidePanelEl.innerHTML = '<h3>Filters</h3>';

    this.categoryEl.innerHTML =
      ' <div><h4>Categories</h4><ul><li>Item 1</li><li>Item 1</li><li>Item 1</li></ul></div> ';

    this.priceEl.innerHTML =
      ' <div><h4>Price Filter</h4><ul><li>Price 1</li><li>Price 1</li><li>Price 1</li></ul></div> ';

    this.searchEl.innerHTML =
      ' <div><h4>Text Filter</h4><input type="text"></div>';
  }

  render() {
    this.bodyEl.append(this.sidePanelEl);
    this.sidePanelEl.append(this.categoryEl);
    this.sidePanelEl.append(this.priceEl);
    this.sidePanelEl.append(this.searchEl);
    return this.bodyEl;
  }
}

export default SidePanel;
