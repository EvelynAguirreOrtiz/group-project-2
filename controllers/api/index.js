const router = require("express").Router();

const userRoutes = require("./user-routes");
// TODO: ADD ANY OTHER MODEL ROUTES HERE

router.use("/users", userRoutes);
// TODO: ADD ANY OTHER ROUTER.USE CODE HERE

module.exports = router;
