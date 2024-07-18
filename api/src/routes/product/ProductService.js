const ProductModel = require("../../models/Product");

module.exports = {
    getProducts: (req, res) => {
        ProductModel.find({});
    },

    addProduct: (req, res) => {
        const product = new ProductModel({...req.body});
        ProductModel.create(product);
    },

    addProducts: (req, res) => {
        const products = req.body; // create list
        ProductModel.insertMany(products);
    },
};