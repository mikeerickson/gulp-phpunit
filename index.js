/*jshint node:true */

'use strict';

var map   = require('map-stream'),
  gutil   = require('gulp-util'),
  os      = require('os'),
  exec    = require('child_process').exec;

module.exports = function(command, opt) {
	// Assign default options if one is not supplied
	opt = opt || {};
	opt = {
		silent:             opt.silent || false,
		debug:              opt.debug  || false,
		clear:              opt.clear  || false,
		configurationFile:  opt.configurationFile  || false,
		testClass:          opt.testClass  || ''
	};

	// If path to phpunit bin not supplied, use default vendor/bin path
	if (!command) {
		command = './vendor/bin/phpunit';

		// Use the backslashes on Windows
		if (os.platform() === 'win32') {
			command = command.replace(/[/]/g, '\\');
		}
	} else if (typeof command !== 'string') {
		throw new gutil.PluginError('gulp-phpunit', 'Invalid PHPUnit Binary');
	}

	var launched = false;

	return map( function(file, cb) {
		// First file triggers the command, so other files does not matter
		if (launched) {
			return cb(null, file);
		}
		launched = true;

		var cmd = opt.clear ? 'clear && ' + command : command;

		if (opt.testClass) {
			cmd += ' ' + opt.testClass;
		}

		if (opt.configurationFile) {
			cmd += ' -c ' + opt.configurationFile;
		}

		if (opt.debug) {
			gutil.log(gutil.colors.yellow('\n       *** Debug Cmd: ' + cmd  + ' ***\n'));
		}

		exec(cmd, function(error, stdout, stderr) {
			if (!opt.silent && stderr) {
				gutil.log(stderr);
			}

			if (!opt.silent) {
				// Trim trailing cr-lf
				stdout = stdout.trim();

				if (stdout) {
					gutil.log(stdout);
				}
			}

			// call user callback if ano error occurs
			if (error) {
				if (opt.debug) {
					gutil.log(error);
				}
				cb(error, file);
			} else {
				cb(null, file);
			}

		});
	});
};
