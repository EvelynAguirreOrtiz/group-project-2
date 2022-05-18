const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

// route to landing page
router.get("/", (req, res) => {
	res.render("landingpage");
});

// get all posts for community wall
router.get("/posts", (req, res) => {
	Post.findAll({
		attributes: ["id", "post_text", "title", "created_at"],
		include: [
			{
				model: Comment,
				attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostData) => {
			const posts = dbPostData.map((post) => post.get({ plain: true }));

			res.render("posts", {
				posts,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// get single post
router.get("/post/:id", (req, res) => {
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "post_text", "title", "created_at"],
		include: [
			{
				model: Comment,
				attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}

			const post = dbPostData.get({ plain: true });

			res.render("single-post", {
				post,
				loggedIn: req.session.loggedIn,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// route to events/calendar page
router.get("/events", withAuth, (req, res) => {
	if (req.session.loggedIn) {
		res.render("events", {
			loggedIn: true,
		});
		return;
	}
	res.render("login");
});

// route to future chat feature
router.get("/friends", withAuth, (req, res) => {
	if (req.session.loggedIn) {
		res.render("friends", {
			loggedIn: true,
		});
		return;
	}
	res.render("login");
});

router.get("/privacy-policy", (req, res) => {
	res.render("privacy-policy");
});

// require user to be logged in
router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}
	res.render("login");
});

module.exports = router;
