import './SidePanel.scss';

const renderProducts = (products) => {
    categoryEl.innerHTML = products.map(product => {
        return `
<div class="item">
    <div class="products">
            <ul>
                <li>${product.category}</li>
            </ul>
        </div>
    </div>
</div>
`
    }).join('');

};

const fetchProducts = async() => {
    const response = await fetch('https://6083c8329b2bed0017040391.mockapi.io/api/products');
    const result = await response.json();
    renderProducts(result);
};

fetchProducts();