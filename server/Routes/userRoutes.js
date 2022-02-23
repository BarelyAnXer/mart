const express = require("express");
const userController = require('../Controllers/userController')

const router = express.Router();

router.get("/getUsers", userController.getUsers);
router.post("/deleteUser", userController.deleteUser);
router.post("/updateUser", userController.updateUser)
router.post("/updateProfile", userController.updateProfile)


module.exports = router;