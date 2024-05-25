const express = require("express");
const { addOrder } = require("../controller/order/cOrder");
const { getProduct, getProductAll } = require("../controller/product/cProduct");
const routes = express.Router();

routes.get("/products", getProductAll);
routes.get("/products/:id", getProduct);
routes.post("/place-order", addOrder);

module.exports = routes;
