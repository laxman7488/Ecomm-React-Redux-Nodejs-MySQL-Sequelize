const order = require('../../service/order/sOrder');


const addOrder = (req, res) => {
    order.addOrder(req.body).then((result) => {
        res.status(200).send(result);
    }).catch(err => { res.status(500).send(err); })
}



module.exports = { addOrder }