'use strict';

var gulpunit = require('../');
var chai     = require('chai');
var should   = chai.should();



describe('gulp-phpunit', function () {

  var caughtErr;

  it('should not throw error if no parameters passed', function (done) {

    try {
      gulpunit();
    }
    catch (err) {
      caughtErr = err;
    }
    should.not.exist(caughtErr);

    done();

  });

  it('should throw error if object passed as first parameter', function (done) {

    try {
      gulpunit({debug: true});
    }
    catch (err) {
      caughtErr = err;
    }
    should.exist(caughtErr);

    done();

  });
});
