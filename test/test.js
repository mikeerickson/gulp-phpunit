'use strict';

var gulpunit  = require('../'),
    should    = require('should');

require('mocha');

describe('gulp-phpunit', function() {
	describe('smoke test', function() {
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
	});
});