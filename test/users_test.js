'use strict';

var assert	= require('assert');
var models 	= require('../models');
var Users  	= models.Users;

describe('Users', function() {

	beforeEach(function(done) {
		models.sequelize.sync({force : true})
		.then(function() {
			done();
		})
	});

	describe('#create', function() {
		it('Expects the User is saved', function(done) {
			
			Users.create({name : 'Batman'})
			.then(function(user) {
				assert.equal(1, user.id);
				done();
			});
		});
	});
});