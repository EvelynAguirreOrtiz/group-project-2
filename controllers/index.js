const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

// TODO: ADD ANY OTHER CONTROLLER/ROUTE CODE HERE

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
