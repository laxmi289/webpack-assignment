import './SidePanel.scss';
import axios from 'axios';

class SidePanel {
  bodyEl = document.createElement('div');

  //Side panel elements
  sidePanelEl = document.createElement('div');
  sidePanelItems = document.createElement('div');
  headingEl = document.createElement('h2');
  categoryEl = document.createElement('div');
  categoryDisplayEl = document.createElement('div');
  priceEl = document.createElement('div');
  searchEl = document.createElement('div');

  //Main body elements
  bodyContainer = document.createElement('div');
  productContainer = document.createElement('div');

  constructor() {
    //Side panel elements properties
    this.bodyEl.setAttribute('id', 'body');
    this.sidePanelEl.setAttribute('id', 'side-panel-container');
    this.sidePanelItems.setAttribute('id', 'side-panel-items');
    this.headingEl.setAttribute('id', 'heading');
    this.categoryEl.setAttribute('id', 'category');
    this.categoryEl.setAttribute('class', 'side-item');
    this.categoryDisplayEl.setAttribute('id', 'category-display');
    this.priceEl.setAttribute('id', 'price');
    this.priceEl.setAttribute('class', 'side-item');
    this.searchEl.setAttribute('id', 'search');
    this.searchEl.setAttribute('class', 'side-item');

    this.headingEl.innerHTML =
      '<a href="#" style="text-decoration:none; color:#b6666f" id="data">Filters</a><hr>';
    this.categoryEl.innerHTML = ' <div><h4 id="one">Categories</h4>';

    this.priceEl.innerHTML =
      ' <div><h4>Price Filter</h4><div id = "price-display"><li class = "item">< $ <a href="" id="price-select">100</a></li><li class = "item">< $ <a href="" id="price-select">300</a></li><li class = "item">< $ <a href="" id="price-select">500</a></li><li class = "item">< $ <a href="" id="price-select">700</a></li><li class = "item">< $ <a href="" id="price-select">1000</a></li></div></div> ';

    this.searchEl.innerHTML =
      ' <div><h4>Text Search</h4><input type="text" id="search-box" placeholder="Enter search text...">';

    //Main body elements properties class = "item"
    this.bodyContainer.setAttribute('id', 'body-container');
    this.productContainer.setAttribute('id', 'prod-container');

    this.headingEl.addEventListener('click', () => {
      var x = document.getElementById('side-panel-items');
      if (x.style.display == 'none') {
        x.style.display == 'block';
      }
    });
  }

  render() {
    //Appending side panel elements to bodyEl
    this.bodyEl.append(this.sidePanelEl);
    this.sidePanelEl.append(this.headingEl);
    this.sidePanelEl.append(this.sidePanelItems);
    this.sidePanelItems.append(this.searchEl);
    this.sidePanelItems.append(this.categoryEl);
    this.categoryEl.append(this.categoryDisplayEl);
    this.sidePanelItems.append(this.priceEl);

    //Appending main body elements to bodyEl
    this.bodyEl.append(this.bodyContainer);
    this.bodyContainer.append(this.productContainer);

    return this.bodyEl;
  }
}

export default SidePanel;
