# gulp-inline-style-checker
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> inline-style-checker plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-inline-style-checker` as a development dependency:

```shell
npm install --save-dev gulp-inline-style-checker
```

Then, add it to your `gulpfile.js`:

```javascript
var inline-style-checker = require("gulp-inline-style-checker");

gulp.src("./src/*.ext")
	.pipe(inline-style-checker())
	.pipe(gulp.dest("./dist"));
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/gulp-inline-style-checker
[npm-image]: https://badge.fury.io/js/gulp-inline-style-checker.png

[travis-url]: http://travis-ci.org/chandrusekar47/gulp-inline-style-checker
[travis-image]: https://secure.travis-ci.org/chandrusekar47/gulp-inline-style-checker.png?branch=master

[coveralls-url]: https://coveralls.io/r/chandrusekar47/gulp-inline-style-checker
[coveralls-image]: https://coveralls.io/repos/chandrusekar47/gulp-inline-style-checker/badge.png

[depstat-url]: https://david-dm.org/chandrusekar47/gulp-inline-style-checker
[depstat-image]: https://david-dm.org/chandrusekar47/gulp-inline-style-checker.png
