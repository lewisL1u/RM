const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    brand: {
        type: String,
        require: true
    },
    productType: {
        type: String,
        require: true
    },
    img: {
        type: Blob,
        require: true
    },
    productUrl: {
        type: String,
        require: true
    },
    productInfo: {
        type: String,
        require: true
    },
    use: {
        type: Array,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    originalPrice: {
        type: Number,
        require: true
    }
},  {timestamps: true}
);

module.exports = mongoose.model("Product", ProductSchema);