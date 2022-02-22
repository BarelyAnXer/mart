const orderController = require('../Controllers/orderController')
const express = require("express");

const router = express.Router();

router.post("/createOrder", orderController.createOrder);
router.post("/removeOrder", orderController.removeOrder);

router.post("/getBuyerToReceive", orderController.getBuyerToReceive);
router.post("/getSellerOrders", orderController.getSellerOrders);

router.post("/removeOrderSeller", orderController.removeOrderSeller);

module.exports = router;
