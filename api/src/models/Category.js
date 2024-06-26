const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    line: {
        type: String,
    },
    size: {
        type: String,
        require
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Category", CategorySchema);