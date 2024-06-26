const Router = require("express").Router;
const router = new Router();

router.get("/get10Products", (req, res) => {
    res.send("Hello World!");
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