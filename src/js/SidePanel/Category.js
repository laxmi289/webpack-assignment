import './SidePanel.scss';

class FetchProducts {
    productDisplay = document.getElementById('category-display');

    constructor() {
        const renderProducts = (products) => {
            this.productDisplay.innerHTML = products
                .map((product) => {
                    return ` 
            <li>${product.category}</li>
        `;
                })
                .join('');
        };

        const fetchProducts = async() => {
            const response = await fetch(
                'https://6083c8329b2bed0017040391.mockapi.io/api/products'
            );
            const result = await response.json();
            renderProducts(result);
        };
        fetchProducts();
    }
}

export default FetchProducts;