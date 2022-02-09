const express = require("express");
const cartController = require("../Controllers/cartController")

const router = express.Router();

router.post("/addToCart", cartController.addToCart);
router.post("/readUserCart", cartController.readUserCart);
router.post("/deleteCartItem", cartController.deleteCartItem);

module.exports = router;