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
            <li><a href="">${product.category}</a><li>
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
            <img src="${item.image}" style="width:150px;">
        </div>
        <div class="box-item" id="item-title-desc">
            <h3>${item.title}</h3>
            <h6>Category: ${item.category}</h6>
            <p>Product description: ${item.description}</p>
            <p>Price: Rs. ${item.price}</p>
        </div>
        </div>
          `;
    })
    .join('');
};

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const result = await response.json();

  let newArray = [];

  // Declare an empty object
  let uniqueObject = {};

  // Loop for the array elements
  for (let i in result) {
    // Extract the title
    let objTitle = result[i]['category'];

    // Use the title as the index
    uniqueObject[objTitle] = result[i];
  }

  // Loop to push unique object into array
  for (var i in uniqueObject) {
    newArray.push(uniqueObject[i]);
  }

  // Display the unique objects
  renderProducts(newArray);

  displayProducts(result);
  displayMens(result);
};

fetchProducts();
