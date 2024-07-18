const Router = require("express").Router;
const router = Router();
const HistoryService = require("./HistoryService");
const LikeService = require("./LikeService");
const UserService = require("./UserService");

// history
router.get("/getMyHistory", [], HistoryService.getMyHistory);
router.post("/addMyHistory", [], HistoryService.addMyHistory);

// like
router.get("/getMyLike", [], LikeService.getMyLike);
router.post("/addMyLike", [], LikeService.addMyLike);

// user
router.post("/register", [], UserService.createUser);
router.post("/login", [], UserService.checkUser);

module.exports = router;