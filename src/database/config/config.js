require("dotenv").config()
const env = process.env
let USER = env.USER
let DATABASE_PASSWORD = env.DATABASE_PASSWORD
let DATABASE_NAME = env.DATABASE_NAME
let DATABASE_HOST = env.DATABASE_HOST
let DATABASE_DIALECT = env.DATABASE_DIALECT
let DATABASE_PORT = env.DATABASE_PORT

module.exports = {
	development: {
		username: env.USER,
		password: env.DATABASE_PASSWORD,
		database: env.DATABASE_NAME,
		host: env.DATABASE_HOST,
		dialect: env.DATABASE_DIALECT,
		port: env.DATABASE_PORT,
	},
	test: {
		username: env.USER,
		password: env.DATABASE_PASSWORD,
		database: env.DATABASE_NAME,
		host: env.DATABASE_HOST,
		dialect: env.DATABASE_DIALECT,
		port: env.DATABASE_PORT,
	},
	production: {
		username: env.USER,
		password: env.DATABASE_PASSWORD,
		database: env.DATABASE_NAME,
		host: env.DATABASE_HOST,
		dialect: env.DATABASE_DIALECT,
		port: env.DATABASE_PORT,
	},
	}

