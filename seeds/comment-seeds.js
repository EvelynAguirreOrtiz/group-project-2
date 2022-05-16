const { Comment } = require("../models");

const commentdata = [
	{
		comment_text:
			"Suscipit tellus mauris a diam. Non diam phasellus vestibulum lorem sed risus ultricies. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Mauris in aliquam sem fringilla ut. Risus viverra adipiscing at in.",
		user_id: 2,
		post_id: 1,
	},
	{
		comment_text:
			"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
		user_id: 4,
		post_id: 2,
	},
	{
		comment_text:
			"Sem integer vitae justo eget magna fermentum. Mattis rhoncus urna neque viverra justo? Lacinia quis vel eros donec ac odio tempor.",
		user_id: 5,
		post_id: 1,
	},
	{
		comment_text:
			" Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Ac auctor augue mauris augue neque gravida in fermentum et. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Sit amet aliquam id diam maecenas.",
		user_id: 3,
		post_id: 5,
	},
	{
		comment_text:
			"Non diam phasellus vestibulum lorem sed risus ultricies tristique. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Nam libero justo laoreet sit amet!",
		user_id: 1,
		post_id: 4,
	},
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
