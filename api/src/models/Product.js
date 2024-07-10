const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    // dell, hp
    brand: {
        type: String,
        require: true
    },
    // laptop, desktop
    productType: {
        type: String,
        require: true
    },
    // xps, thinkPad
    model:{
        type: String,
        require: true
    },
    img: {
        type: String,
        //require: true
    },
    imgUrl: {
        type: String
    },
    productUrl: {
        type: String,
        require: true
    },
    // json
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