/*jshint node:true */

"use strict";

var map = require('map-stream'),
	gutil = require('gulp-util'),
 colors = require('colors'),
	   os = require('os'),
	 exec = require('child_process').exec;

module.exports = function(command, opt){
	var counter = 0;

	// if path to phpunit bin not supplied, use default vendor/bin path
	if(! command)
		(os.platform() === 'win32') ? command = '.\\vendor\\bin\\phpunit' : command = './vendor/bin/phpunit';

	if (!opt) {
		opt = {};
	}

	if (typeof opt.silent === 'undefined') {
		opt.silent = false;
	}

	if (typeof opt.debug === 'undefined'){
		opt.debug = false;
	}

	if(typeof opt.clear === 'undefined'){
		opt.clear = false;
	}

	if(typeof opt.testClass === 'undefined'){
		opt.testClass = '';
	}

	if(typeof opt.notify === 'undefined'){
		opt.notify = false;
	}

	return map(function (file, cb) {
		var cmd = opt.clear ? 'clear && ' + command : command;
		if(opt.testClass)
			cmd += ' ' + opt.testClass;
		if(counter == 0) {

			if (opt.debug) {
				console.log('\n       *** Debug Cmd: '.yellow + cmd.yellow + ' ***\n'.yellow);
			}

			counter++;
			exec(cmd, function (error, stdout, stderr) {

				if (!opt.silent && stderr) {
					gutil.log(stderr);
				}
				if (stdout) {
					stdout = stdout.trim(); // Trim trailing cr-lf
				}
				if (!opt.silent && stdout) {
					gutil.log(stdout);
				}
				if(opt.debug && error) {
					console.log(error);
				}
				if(opt.notify) {
					cb(error, file);
				}
			});
		}
	});

};
