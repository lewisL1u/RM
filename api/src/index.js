const express = require("express");
const app = express();

const userRouter = require("./routes/user");
const productRouter = require("./routes/product/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/product', productRouter);

const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
    console.log(`API Service listening on port ${PORT}`);
});