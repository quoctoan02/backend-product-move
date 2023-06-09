const { authen, authenFactory } = require('../authentication/authen');
const product = require('../controller/product/index');

const productRoute = (app) => {
    /**
     * Get product by id
     * @route GET /products
     * @security JWT
     * @group Product
     * @returns {object} 200 - Product
     * @returns {Error}  default - Unexpected error
     */

    app.get('/api/products', authen, async (req, res, next) => {
        product.getProduct(req, res);
    });

    /**
     * Get product by id
     * @route GET /products/{id}
     * @security JWT
     * @param {string}  id.path.required - category
     * @group Product
     * @returns {object} 200 - Product
     * @returns {Error}  default - Unexpected error
     */

    app.get('/api/products/:id', authen, async (req, res, next) => {
        product.getProductById(req, res);
    });

    /**
     * Get product by id
     * @route GET /products/sort/productline
     * @param {string}  productline.query.required - category
     * @security JWT
     * @group Product
     * @returns {object} 200 - Product
     * @returns {Error}  default - Unexpected error
     */

    app.get('/api/products/sort/productline', authen, async (req, res, next) => {
        product.getProductByProductLine(req, res);
    });

    /**
     * @typedef Product
     * @property {string} code.required -
     * @property {string} name.required -
     * @property {number} price.required -
     * @property {string} imageUrl.required -
     * @property {string} productLine.required -
     * @property {string} description.required -
     */
    /**
     * Create new product
     * @route POST /products/create
     * @security JWT
     * @param {Product.model} point.body.required - Product information
     * @group Product
     * @returns {object} 200 - message
     * @returns {Error}  default - Unexpected error
     */

    app.post('/api/products/create', authenFactory, async (req, res, next) => {
        product.createProduct(req, res);
    });

    /**
     * Login admin account
     * @route DELETE /products/delete/{id}
     * @security JWT
     * @param {number}  id.path.required - Product Id
     * @group Product
     * @returns {object} 200 - message
     * @returns {Error}  default - Unexpected error
     */

    app.delete('/api/products/delete/:id', authenFactory, async (req, res, next) => {
        product.deleteProduct(req, res);
    });
};

module.exports = productRoute;
