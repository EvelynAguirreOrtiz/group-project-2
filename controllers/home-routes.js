const router = require("express").Router();
const sequelize = require("../config/connection");
// TODO: DON'T FORGET TO ADD OTHER MODELS IN {} BELOW
const { User } = require("../models");

// TODO: ADD ROUTER.GET CODE HERE

// check to see if user is logged in befoer proceeding to dashboard
router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}
	res.render("login");
});

module.exports = router;
