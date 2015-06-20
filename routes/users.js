'use strict';
var express 	= require('express');
var router 		= express.Router();
var models		= require('../models');
var Users 		= models.Users;

/* GET users listing. */
router.get('/new', function(req, res) {
	res.render('new');
});

router.post('/create', function(req, res) {
	Users.create({name : req.body.name})
	.then(function(user) {
		console.log('Usuario criado com sucesso');
		res.redirect('/');
	})
	.catch(function(err) {
		console.log('Erro');
		res.render('new', {errorMessage : 'Houve algum erro: ' + err});
	});
});

router.get('/list', function(req, res) {
	Users.findAll()
	.then(function(users) {
		console.log(JSON.stringify(users));
		res.render('list', {result : users});
	})
	.catch(function(err) {
		res.redirect('/');
	})
});

module.exports = router;
