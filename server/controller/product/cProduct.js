const product = require('../../service/product/sProduct');


const getProductAll = (req, res) => {
    product.getProductsAll().then((result) => {
        res.status(200).send(result);
    }).catch(err => { res.status(500).send(err); })
}
const getProduct = (req, res) => {
    product.getProducts(req.params.id).then((result) => {
        res.status(200).send(result);
    }).catch(err => { res.status(500).send(err); })
}


module.exports = { getProductAll, getProduct }