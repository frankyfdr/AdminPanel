
const express = require("express");
const routes = express.Router();
const OrderController = require("./controllers/OrdersController.js")
const ProductsController = require("./controllers/ProductsController.js")
const DashController = require("./controllers/DashController.js")

routes.post("/newOrder", OrderController.new)
routes.get("/allOrders", OrderController.allOrders)
routes.put("/updateOrder", OrderController.updateOrder)
routes.delete("/deleteOrder", OrderController.deleteOrder)

routes.post("/newPRO", ProductsController.newPRO)
routes.get("/allPRO", ProductsController.allPRO)
routes.put("/updatePRO", ProductsController.updatePRO)
routes.delete("/deletePRO", ProductsController.deletePRO)
routes.get("/allSells", DashController.allSell)

module.exports = routes;