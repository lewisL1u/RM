const express = require("express");
const app = express();
app.use(express.json());

const Router = express.Router;
const router = Router();
const amqp = require("amqplib");
const Buffer = require('buffer').Buffer;
const amqpUrl = process.env.AMQP_URL || "amqp://localhost:5672";
const PORT = process.env.PORT || 3005;

const ProductService = require('./product');

async function createRabbitMQChannel() {
    let connection, channel;
    connection = await amqp.connect(amqpUrl);
    channel = await connection.createChannel();
    return channel;
}

router.get("/get10Products", (req, res) => {
    res.send("Hello World!");
});

router.post("/addProduct", async (req, res) => {
    ProductService.addProduct({...req.body});
    res.send("Success!");
});

// get my history
router.get("/getMyHistory", (req, res) => {
    res.send("Hello World!");
});

// add my history
router.post("/addMyHistory", (req, res) => {
    res.send("Hello World!");
});

// get 10 like
router.get("/getMyLike", (req, res) => {
    res.send("Hello World!");
});

// add my like
router.post("/addMyLike", (req, res) => {
    res.send("Hello World!");
});

// create a new user
router.post("/createUser", (req, res) => {
    res.send("Hello World!");
});

// login
router.post("/login", (req, res) => {
    res.send("Hello World!");
});



module.exports = router;