const Product = require("../Models/Product");
const mongoose = require("mongoose");

module.exports.create = async (req, res) => {
    const {name, price, quantity, uid, category} = req.body;
    const {id} = req.file

    console.log(req.file);

    const imgUrl = "http://localhost:5000/file/" + req.file.filename

    console.log(imgUrl)

    try {
        const createdProduct = await Product.create({
            name,
            price,
            quantity,
            uid,
            imgId: id,
            imgUrl,
            category
        });
        const products = await Product.find({"uid": uid});
        res.status(201).json(products);
    } catch (error) {
        res.status(400).json({errors: error});
    }

};

module.exports.readAll = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
};

module.exports.readSellerProducts = async (req, res) => {
    const {uid} = req.body;
    const products = await Product.find({"uid": mongoose.Types.ObjectId(uid)});
    res.status(200).json(products);
};

module.exports.update = async (req, res) => {
    const {id, filename} = req.file;
    const {productId, name, price, quantity, category} = req.body;

    const product = await Product.find({"_id": productId});
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {bucketName: 'uploads'});
    const imgUrl = "http://localhost:5000/file/" + filename

    try {
        await bucket.delete(mongoose.Types.ObjectId(product[0].imgId));
        const updatedProduct = await Product.findOneAndUpdate({"_id": productId}, {
            $set: {
                "imgId": id,
                "imgUrl": imgUrl,
                "name": name,
                "price": price,
                "quantity": quantity,
                "category": category
            }
        }, {new: true})

        console.log(updatedProduct, "UPDATED PRODUCT");

        // await bucket.rename(mongoose.Types.ObjectId({"_id": product.imgId}), filename);
        // para san yung bucket.rename ano use cases
        // kung ang proccess ko ng pag edit ng image is delete new image
        // then update the product refrenece to image (imangename, imgid, imurl)

        res.status(200).send(updatedProduct);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

module.exports.delete = async (req, res) => {
    const {productId, uid} = req.body;
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {bucketName: 'uploads'});

    const product = await Product.find({"_id": productId});

    // why  product[0] ? why zero index because   await Product.find({"_id": productId}); return array even
    // though it has only 1 element. it always return arrays
    await bucket.delete(mongoose.Types.ObjectId(product[0].imgId));

    const deletedProduct = await Product.findByIdAndDelete(productId);

    const products = await Product.find({"uid": uid});
    res.status(200).json(products);
};

module.exports.product = async (req, res) => {
    const productId = req.params.id
    const product = await Product.find({"_id": productId})
    res.status(200).json(product);
};

module.exports.incrementTest = async (req, res) => {
    const product = await Product.findOneAndUpdate({"_id": mongoose.Types.ObjectId("61f9ea85acf4908cdf2bcd6e")}, {
        $inc: {"quantity": "4"},
        $set: {"name": "newname"}
    }, {new: true})

    res.send(product);
};

module.exports.getCategories = async (req, res) => {
    try {
        const products = await Product.find({});

        let categories = [];

        for (const product of products) {
            categories.push(product.category);
        }

        res.status(200).send(categories);

    } catch (errors) {
        res.status(400).json({"errors": errors});
    }
};

module.exports.getFilterProduct = async (req, res) => {
    const category = req.params.category;

    console.log(category);

    try {

        const products = await Product.find({"category": category})

        res.status(200).json(products);

    } catch (errors) {
        res.status(400).json({"errors": errors});
    }
};
