'use strict';

var gulpunit  = require('../'),
    should    = require('should');

require('mocha');

describe('gulp-phpunit', function() {

		it('should not error if no parameters passed', function(done) {
			// Arrange
			var caughtErr;

			// Act
			try {
				gulpunit();
			} catch (err) {
				caughtErr = err;
			}

			// Assert
			should.not.exist(caughtErr);
			done();

		});

	it('should throw error if object passed as first parameter', function(done) {

		// arrange
		var caughtErr;

		// act
		try {
			gulpunit({debug: true});
		} catch (err) {
			caughtErr = err;
		}

		// assert
		should.exist(caughtErr);

		done();

	});

});