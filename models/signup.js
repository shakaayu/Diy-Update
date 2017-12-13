var mongoose = require('mongoose');

//creating schema

var profileSchema = mongoose.Schema({
	name: String,
	password: String,
	email: String,
	dob: String,
	gender: String,
	contact: String
	
});
var SignUp = module.exports = mongoose.model('signup', profileSchema)

module.exports.getSignUps = function( callback, limit) {
	SignUp.find(callback).limit(limit);
}