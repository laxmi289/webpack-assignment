// Test import of a JavaScript module
import App from '@/js/App/App';
import SidePanel from '@/js/SidePanel/SidePanel';

// Test import of styles
import '@/styles/index.scss';

// Appending to the DOM
const app = document.querySelector('#root');
app.append(new App().render());
app.append(new SidePanel().render());

const category = document.querySelector('#category-display');
const product = document.querySelector('#prod-container');

const renderProducts = (products) => {
  category.innerHTML = products
    .map((product) => {
      return `
        <div class="item">
            <li><a href="" onmousedown="show()">${product.category}</a><li>
        </div>
        `;
    })
    .join('');
};

const displayProducts = (items) => {
  product.innerHTML = items
    .map((item) => {
      return `
        <div id="box">
        <div class="box-item" id="item-img">
            <img src="${item.image}">
        </div>
        <div class="box-item" id="item-title-desc">
            <h3>${item.title}</h3>
            <h6>Category: ${item.category}</h6>
            <p>Product description: ${item.description}</p>
            <p>Price: ${item.price}</p>
        </div>
        </div>
          `;
    })
    .join('');
};

const fetchProducts = async () => {
  const response = await fetch(
    'https://6083c8329b2bed0017040391.mockapi.io/api/products'
  );
  const result = await response.json();
  const tools_filter = result.filter((element) => element.category);
  renderProducts(result);
  displayProducts(tools_filter);
};
fetchProducts();
