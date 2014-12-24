var gulp = require('gulp');
var less = require('gulp-less');


gulp.task('default', function () {
	return gulp.src('app/styles/main.less').pipe(less()).pipe(gulp.dest('dist/css/'));
});


// @TODO: clean dist
// @TODO: watch
// @TODO: jshint
// @TODO: autoprefixer
// @TODO: minify
// @TODO: watch
// @TODO: serve
