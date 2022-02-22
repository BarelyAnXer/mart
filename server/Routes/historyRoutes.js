const express = require("express");
const historyController = require('../Controllers/historyController')

const router = express.Router();

router.post("/createHistory", historyController.createHistory);
router.post("/getSellerHistory", historyController.getSellerHistory);
router.get("/getAdminHistory", historyController.getAdminHistory);

module.exports = router;