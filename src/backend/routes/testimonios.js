const { Router } = require("express");
const router = Router();
const controller = require("../controllers/testimonioController");

router.post("/", controller.testimonioControllerPost);
module.exports = router;
