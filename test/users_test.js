'use strict';

var assert	= require('assert');
var models 	= require('../models');
var Users  	= models.Users;

describe('Users', function() {
	describe('#create', function() {
		it('Expects the User is saved', function(done) {
			Users.create({name : 'Batman'})
			.then(function(user) {
				console.log(user.id);
				assert(user.id != null);
				done();
			})
		});
	});
});