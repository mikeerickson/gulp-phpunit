# gulp-phpunit
> PHPUnit plugin for gulp 3

## Usage

First, install `gulp-phpunit` as a development dependency:

```shell
npm install --save-dev gulp-phpunit
```

Then, add it to your `gulpfile.js`:

```javascript
var phpunit = require('gulp-phpunit');

// option 1: default format
gulp.task('phpunit', function() {
	gulp.src('./app/tests/*.php').pipe(phpunit());
});

// option 2: with defined bin and options
gulp.task('phpunit', function() {
	var options = {debug: false};
	gulp.src('./app/tests/*.php').pipe(phpunit('./vendor/bin/phpunit',options));
});


// Note: Windows OS may require double backslashes if using other than default location (option 1)
gulp.task('phpunit', function() {
  gulp.src('./app/tests/*.php').pipe(phpunit('.\\path\\to\\phpunit'));
});

// option 3: supply callback to integrate something like notification (using gulp-notify)

var gulp = require('gulp'),
 notify  = require('gulp-notify'),
 phpunit = require('gulp-phpunit');

gulp.task('phpunit', function() {
	var options = {debug: false, notify: true};
	gulp.src('app/tests/*.php')
		.pipe(phpunit('', options))
		.on('error', notify.onError({
			title: "Failed Tests!",
			message: "Error(s) occurred during testing..."
		}));
});

```

## API

### phpunit(phpunitpath,options)

#### phpunitpath

Type: `String`

The path to the desired PHPUnit binary
- If not supplied, the defeault path will be ./vendor/bin/phpunit

#### options.debug
Type: `Boolean`

Emit error details

#### options.clear
Type: `Boolean`

Clear console before executing command

#### options.testClass
Type: `String`

Define a specific class for testing (supply full path to test class)

#### options.configurationFile
Type: `String`

Define a path to an xml configuration file (supply full path and filename)

#### options.notify
Type: `Boolean`

Call user supplied callback to handle notification

## Changelog

- 0.5.2: Small adjustments and Configuration File Support (thanks @wayneashleyberry)
   - Added Configuration File Support
   - Removed Node 0.9 from Travis support
   
- 0.5.1: Added CI Support
    - Added .travis support
    - Added .circle support

- 0.5.0: Complete refactoring and cleanup (thanks @taai)
    - Simplified code and callback handling
    - Addressed additional issues related to dependecies

- 0.4.2: Added additional tests

- 0.4.1: Code Cleanup
    - Removed calls to console.log -> gutil.log (playing nice in the playground)
    - Fixed issue with calling as dependency task (thanks @taai)

- 0.4.0: Added check for invalid PHPUnit binary path as first parameter
    - Safeguard to assure options is not passed as first parameter

- 0.3.0: Refactoring
    - Refactored color console message to use gulp-util instance instead of color plugi

- 0.2.1: Update Default Command - Windows Fix
    - Fixed default command when using windows (thx @imissions)

- 0.1.0:
    - Enhanced debug output (supporting color)

- 0.0.4:
    - Updated version number, error publishing full archive to npm in 0.0.3 update

- 0.0.3:
    - Added support return calling user supplied callback to handle notification

- 0.0.2:
    - Fixed issue which caused tests to be run multiple times
    - Added 'clear' flag to clear console before running tests
    - Added 'testClass' option to define a specific class to test
    - Added './vendor/bin/phpunit' as default bin if no path supplied

- 0.0.1: Initial Release

## Credits

gulp-phpunit written by Mike Erickson

E-Mail: [codedungeon@gmail.com](mailto:codedungeon@gmail.com)

Twitter: [@codedungeon](http://twitter.com/codedungeon)

Website: [codedungeon.org](http://codedungeon.org)
