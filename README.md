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


gulp.task('phpunit', function() {
	var options = {debug: false};
	gulp.src('./app/tests/*.php').pipe(phpunit('./vendor/bin/phpunit',options));
});
```

## API

### phpunit(phpunitpath,options)

#### phpunitpath

Type: `String`

The path to the desired PHPUnit binary

#### options.debug
Type: `Boolean`

Emit error details

## Credits

PHPUnit written by Mike Erickson
