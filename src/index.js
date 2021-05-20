// Test import of a JavaScript module
import App from '@/js/App/App';
import SidePanel from '@/js/SidePanel/SidePanel';
// import _ from 'lodash';

// Test import of styles
import '@/styles/index.scss';

// Appending to the DOM
const app = document.querySelector('#root');
app.append(new App().render());
app.append(new SidePanel().render());

const category = document.querySelector('#category-display');
const product = document.querySelector('#prod-container');
const priceList = document.querySelector('#price');

const renderProducts = (products) => {
  category.innerHTML = products
    .map((product) => {
      return `
            <li class = "item"><a href="" id = "category-select">${product.category}</a><li>
        `;
    })
    .join('');

  category.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.id == 'category-select') {
      if (document.querySelector('#prod-container').length != 0) {
        document.querySelector('#prod-container').innerHTML = '';

        const getResult = (items) => {
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
                    <p>Price: $ ${item.price}</p>
                </div>
                <hr>
                </div>
                  `;
            })
            .join('');
        };

        const a1 = async () => {
          const response1 = await fetch('https://fakestoreapi.com/products');
          const result1 = await response1.json();
          const selecteditem = event.target.text;
          localStorage.setItem('data', selecteditem);
          const filtered = result1.filter(
            (item) => item.category === selecteditem
          );

          getResult(filtered);
        };
        a1();
      }
    }

    priceList.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target.id == 'price-select') {
        if (document.querySelector('#prod-container').length != 0) {
          document.querySelector('#prod-container').innerHTML = '';

          const show = (items) => {
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
                      <p>Price: $ ${item.price}</p>
                  </div>
                  </div>
                    `;
              })
              .join('');
          };

          const d1 = async () => {
            const response1 = await fetch('https://fakestoreapi.com/products');
            const result1 = await response1.json();
            const selecteditem = event.target.text;
            const selecteditem2 = localStorage.getItem('data');
            const filtered = result1.filter(
              (item) =>
                item.price < selecteditem && item.category === selecteditem2
            );

            show(filtered);
          };
          d1();
        }
      }
    });
  });

  priceList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.id == 'price-select') {
      if (document.querySelector('#prod-container').length != 0) {
        document.querySelector('#prod-container').innerHTML = '';

        const show = (items) => {
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
                    <p>Price: $ ${item.price}</p>
                </div>
                </div>
                  `;
            })
            .join('');
        };

        const d1 = async () => {
          const response1 = await fetch('https://fakestoreapi.com/products');
          const result1 = await response1.json();
          const selecteditem = event.target.text;
          const filtered = result1.filter((item) => item.price < selecteditem);

          show(filtered);
        };
        d1();
      }
    }
  });
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
            <p>Price: $ ${item.price}</p>
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
  for (var i in result) {
    // Extract the category
    let objTitle = result[i]['category'];

    // Use the category as the index
    uniqueObject[objTitle] = result[i];
  }

  // Loop to push unique object into array
  for (var i in uniqueObject) {
    newArray.push(uniqueObject[i]);
  }

  renderProducts(newArray);
  displayProducts(result);
};

fetchProducts();

document.getElementById('search-box').addEventListener('keyup', myFunction);

function myFunction() {
  const x = document.getElementById('search-box');
  const y = x.value;

  const search = (items) => {
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
              <p>Price: $ ${item.price}</p>
          </div>
          </div>
            `;
      })
      .join('');
  };

  const c1 = async () => {
    const response1 = await fetch('https://fakestoreapi.com/products');
    const result2 = await response1.json();

    const selectitem = y;
    console.log(selectitem);

    const filtered = result2.filter((item) =>
      item.title.toLocaleLowerCase().includes(selectitem)
    );
    search(filtered);
  };
  c1();
}
