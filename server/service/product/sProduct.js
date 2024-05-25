const ProductMock = require('../../mock/product.mock');

class ProductService {
    async getProductsAll() {
        return {status:true, data: ProductMock}
    }

    async getProducts(id) {
        return {status:true, data: ProductMock.find(product => product.id === id)}
    }
}

module.exports = new ProductService();