var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const SignUp = require('../models/signup');

router.post('/insert', function(req, res){

	var signup= new SignUp(req.body);
	signup.save(function(err, doc){
		if (err) throw err
			res.redirect('/')
	});

})
module.exports = router;