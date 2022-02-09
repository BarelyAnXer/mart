const express = require("express");

const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const {requireAuth, checkUser} = require("./authMiddleware");
const authRoutes = require("./Routes/authRoutes");
const productRoutes = require("./Routes/productRoutes");
const cartRoutes = require("./Routes/cartRoutes")
const Grid = require("gridfs-stream");
Grid.mongo = mongoose.mongo;

const app = express();

// middleware & static files
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// database connection
const port = 5000;
const dbURI = `mongodb+srv://zye:qwerty123@cluster0.h37iq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


mongoose.connect(dbURI)
    .then((result) => {
        app.listen(port);
        console.log("connected to db");
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/test", function (req, res) {
    res.send("test");
});

app.get("/file/:filename", function (req, res) {
    try {

        const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {bucketName: 'uploads'});
        const downloadStream = bucket.openDownloadStreamByName(req.params.filename);

        downloadStream.on("data", function (data) {
            return res.status(200).write(data);
        });

        downloadStream.on("error", function (err) {
            return res.status(404).send({message: "Cannot download the Image!"});
        });

        downloadStream.on("end", () => {
            return res.end();
        });
    } catch (error) {
        res.status(500).json({"error": error.message})
    }
});


app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);
