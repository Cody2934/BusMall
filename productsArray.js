export class productsArray {
    constructor(products) {
        this.products = products.slice();
    }   

    getProducts() {
        return this.products;
    }

    //removes an product from the array
    removeProductById(someId) {
        this.products.forEach((product, i) => {
            if (someId === product.id) {
                this.products.splice(i, 1);
            }
        });
    }

    //grabs specific product image
    getProductById(someId) {
        let productMatch;
        
        this.products.forEach(product => {
            //compare the id with all product id
            if (someId === product.id) {
                productMatch = product;
            }
        });

        return productMatch;
    }
    //show if any products exist
    hasAnyProducts() {
        return this.products.length;
    }

    //get an product at random
    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);

        return this.products[randomProductIndex];
    }
}