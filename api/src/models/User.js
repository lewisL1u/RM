const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    gmail: {
        type: String,
        required: true,
        unique: true,
    },
    token: {
        type: String,
        required: true,
    },
},
    { timestamps: true });

module.exports = mongoose.model("User", UserSchema);