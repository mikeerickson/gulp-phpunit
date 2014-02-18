'use strict';

var gulp = require('gulp'),
   mocha = require('gulp-mocha');

gulp.task('test', function () {
	return gulp.src('./test/test.js')
		.pipe(mocha({reporter: 'nyan'}));
});

// global watcher task to do all the magical stuff
gulp.task('watch',function(){
	gulp.watch('./index.js',['test']);
	gulp.watch('./test/test.js',['test']);
});