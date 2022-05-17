const { Post } = require("../models");

const postdata = [
  {
    title: "Red, White & BBQ. Memorial Day Fun, Anyone?!",
    post_text:
      "It's a three day weekend and we've been working hard - who's in? Let's see if any events are in event going on - check the calendar!",
    user_id: 1,
  },
  {
    title: "Summer Sports",
    post_text:
      "Hey ya'll - San Antonio Sport and Social has is registering now for several sports. They openings on all days of the week. Check it outhttps://sanantoniossc.com/ Let's form a team! ",
    user_id: 2,
  },
  {
    title: "Fun Run",
    post_text:
      "We're halfway through the year! How are you doing on your new years resolutions? Still running more?! Eeeep. 5K anyone?",
    user_id: 3,
  },
  {
    title: "Margarita Mondays",
    post_text:
      "Hey it's 5 o'clock somewhere and I just got off of work! Let's meet at Chuy's off of 281!",
    user_id: 4,
  },
  {
    title: "Puppy Play Date?",
    post_text:
      "Puppers and I could use some outdoors time. Dog park date anyone? I'm in the Northeast area.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
