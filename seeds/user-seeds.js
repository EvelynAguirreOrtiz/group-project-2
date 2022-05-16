const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
	{
		username: "Tuquedor2117",
		email: "Tuquedor@email.com",
		password: "password",
	},
	{
		username: "Kameezkool1",
		email: "Kameezkool@email.com",
		password: "password",
	},
	{
		username: "Dnieper95",
		email: "Dnieper@email.com",
		password: "password123",
	},
	{
		username: "Gadflyboomz4085",
		email: "Gadflyboomz@email.com",
		password: "password123",
	},
	{
		username: "BoshrajvKa35",
		email: "BoshrajvKa@email.com",
		password: "password",
	},
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
