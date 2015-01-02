var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var del = require('del');
var jshint = require('gulp-jshint');
var less = require('gulp-less');

var paths = {
	styles: ['app/styles/*.less', '!app/styles/_*.less'],
	scripts: ['app/scripts/**/*.js'],
	images: ['app/**/*.jpg', 'app/**/*.png', 'app/**/*.gif'],
	pages: ['app/**/*.html'],
	plugins: [
		'bower_components/angular/angular.min.js',
		'bower_components/angular-resource/angular-resource.min.js',
		'bower_components/angular-sanitize/angular-sanitize.min.js',
		'bower_components/angular-route/angular-route.min.js'
	]
};

gulp.task('default', ['styles', 'scripts', 'plugins', 'pages', 'images']);

gulp.task('pages', function () {
	return gulp.src(paths.pages)
		.pipe(gulp.dest('dist/'));
});
gulp.task('images', function () {
	return gulp.src(paths.images)
		.pipe(gulp.dest('dist/'));
});

gulp.task('styles', function () {
	return gulp.src(paths.styles)
		.pipe(less())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist/styles/'));
});

gulp.task('scripts', function () {
	return gulp.src(paths.scripts)
		.pipe(jshint())
		//.pipe(concat('all.min.js'))
		.pipe(gulp.dest('dist/scripts/'));
});

gulp.task('plugins', function () {
	return gulp.src(paths.plugins)
		//.pipe(concat('all.min.js'))
		.pipe(gulp.dest('dist/plugins/'));
});

gulp.task('clean', function (callback) {
	del(['dist'], callback);
});

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.pages, ['pages']);
	//gulp.watch(paths.images, ['images']);
});

// @TODO: minify


// Static server
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "dist/"
		}
	});
});
