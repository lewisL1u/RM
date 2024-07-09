const Product = require("../models/Product");

async function addProduct(product) {
    const p = new Product(product);
    return await p.save().then(() => true).catch(() => {return false});
}

async function getProducts() {
    return await Product.find();
}

module.exports = {addProduct, getProducts};