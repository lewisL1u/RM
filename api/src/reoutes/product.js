const Product = require("../models/Product");

async function addProduct(product, Channel) {
    const p = new Product(product);
    return await p.save().then(() => true).catch(() => {return false});
}