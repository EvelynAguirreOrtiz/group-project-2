const { Post } = require("../models");

const postdata = [
	{
		title: "Have a Great Weekend!",
		post_text:
			"Euismod nisi porta lorem mollis aliquam ut porttitor leo. Aliquam sem et tortor consequat id porta nibh venenatis cras. Metus dictum at tempor commodo ullamcorper a. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Quam lacus suspendisse faucibus interdum. Feugiat scelerisque varius morbi enim. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Aliquet bibendum enim facilisis gravida neque convallis a. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Enim diam vulputate ut pharetra. Potenti nullam ac tortor vitae. Neque volutpat ac tincidunt vitae.",
		user_id: 1,
	},
	{
		title: "Good Sports",
		post_text:
			"Bibendum est ultricies integer quis auctor elit. Posuere morbi leo urna molestie at elementum eu facilisis. Quam viverra orci sagittis eu volutpat odio facilisis. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Semper eget duis at tellus at. Maecenas sed enim ut sem. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Nec ultrices dui sapien eget. Vitae nunc sed velit dignissim. Scelerisque viverra mauris in aliquam sem. Non quam lacus suspendisse faucibus interdum. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Ut pharetra sit amet aliquam id diam. Orci ac auctor augue mauris augue neque gravida in fermentum.",
		user_id: 2,
	},
	{
		title: "Fun Run",
		post_text:
			"Cursus metus aliquam eleifend mi in nulla. Turpis egestas integer eget aliquet nibh praesent tristique. Turpis cursus in hac habitasse platea dictumst. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Ullamcorper morbi tincidunt ornare massa eget. Eget dolor morbi non arcu. At quis risus sed vulputate. Adipiscing enim eu turpis egestas. Et netus et malesuada fames. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Purus in mollis nunc sed id semper risus in. Cras adipiscing enim eu turpis egestas pretium aenean. Nulla porttitor massa id neque.",
		user_id: 3,
	},
	{
		title: "Red, White & BBQ",
		post_text:
			"Arcu dui vivamus arcu felis bibendum ut. Massa id neque aliquam vestibulum morbi. Diam ut venenatis tellus in metus vulputate eu. Et leo duis ut diam. Volutpat diam ut venenatis tellus in. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Augue mauris augue neque gravida in fermentum. Interdum velit laoreet id donec ultrices tincidunt arcu. Aliquam ut porttitor leo a. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Amet facilisis magna etiam tempor orci. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.",
		user_id: 4,
	},
	{
		title: "Margarita Mondays",
		post_text:
			"Enim sit amet venenatis urna. Dictum fusce ut placerat orci nulla pellentesque. Et molestie ac feugiat sed. Congue mauris rhoncus aenean vel elit scelerisque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Adipiscing diam donec adipiscing tristique risus. Volutpat maecenas volutpat blandit aliquam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Nisl nisi scelerisque eu ultrices vitae auctor. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Nisl purus in mollis nunc sed id semper. Quam id leo in vitae turpis massa sed. Cursus euismod quis viverra nibh cras pulvinar. Eleifend mi in nulla posuere sollicitudin aliquam ultrices. Mauris sit amet massa vitae tortor condimentum lacinia. Id aliquet risus feugiat in ante metus. Nibh mauris cursus mattis molestie a iaculis. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Diam maecenas sed enim ut.",
		user_id: 5,
	},
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
