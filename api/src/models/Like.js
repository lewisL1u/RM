const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    gmail: {
        type: String,
        required: true
    },
    Products: [{
        product_id: String,
    }],

}, {timestamps: true}
);

module.exports = mongoose.model("Like", LikeSchema);