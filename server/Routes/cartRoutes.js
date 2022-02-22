const express = require("express");
const cartController = require("../Controllers/cartController")

const router = express.Router();

router.post("/addToCart", cartController.addToCart);
router.post("/readUserCart", cartController.readUserCart);
router.post("/deleteCartItem", cartController.deleteCartItem);
router.post("/completePurchase", cartController.completePurchase);
router.post("/updateCartQuantity", cartController.updateCartQuantity);

module.exports = router;
