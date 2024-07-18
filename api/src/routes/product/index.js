const Router = require("express").Router;
const router = Router();

const CategoryService = require("./CategoryService");
const ProductService = require("./ProductService");

// product
router.get("/getProducts", [], ProductService.getProducts);
router.post("/addProduct", [], ProductService.addProduct);
router.post("/addProducts", [], ProductService.addProducts);

// category
router.get("/getCategory", [], CategoryService.getCategory);
router.post("/addCategory", [], CategoryService.addCategory);

module.exports = router;