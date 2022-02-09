const express = require("express");
const productController = require("../Controllers/productController")
const multer = require("multer");
const path = require("path");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const {GridFsStorage} = require("multer-gridfs-storage");
const crypto = require("crypto");

const router = express.Router();

const dbURI = `mongodb+srv://zye:qwerty123@cluster0.h37iq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connection = mongoose.connection;

let gfs;
connection.once('open', () => {
    gfs = Grid(connection.db);
    gfs.collection('uploads');
});

const storage = new GridFsStorage({
    url: dbURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                resolve(fileInfo);
            });
        });
    }
});

const imageUpload = multer({storage});

router.post("/create", imageUpload.single("image"), productController.create);
router.get("/readAll", productController.readAll);
router.post("/readSellerProducts", productController.readSellerProducts);
router.post("/delete", productController.delete);
router.get("/product/:id", productController.product);
router.post("/update", imageUpload.single("image"), productController.update);

router.get("/incrementTest", productController.incrementTest);

module.exports = router;