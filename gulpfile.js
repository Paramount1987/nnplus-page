var gulp = require('gulp');
var watch = require('gulp-watch');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var twig = require('gulp-twig');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

// Static Server
gulp.task('serve', ['templates', 'image'], function() {

    browserSync.init({
        server: "./dist",
        files: ["dist/css/style.css", "dist/img/*"]
    });

    gulp.watch("src/tpl/**/*.twig", ['templates']).on('change', browserSync.reload);
    gulp.watch("dist/js/**/*.js").on('change', browserSync.reload);
});

//----------------------------------------------------------------
gulp.task('templates', function () {

    return gulp.src('./src/tpl/*.twig')
        .pipe(twig())
        .pipe(gulp.dest('./dist'));
});

//----------------------------------------------------------------
gulp.task('webpack-task', function() {
    return gulp.src('src/scripts/index.js')
        .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
        .pipe(gulp.dest('dist/'));
});

//----------------------------------------------------------------
gulp.task('image', function () {
   gulp.src('src/img/**/*')
       .pipe(imagemin())
       .pipe(gulp.dest('dist/img'))
});

//----------------------------------------------------------------
gulp.task('watcher', function () {
	return watch('src/img/**/*', function () {
		gulp.src('src/img/**/*')
			.pipe(imagemin())
			.pipe(gulp.dest('dist/img'))
	});
});

//gulp.task('dev',  gulp.parallel('webpack-task', 'serve'));
gulp.task('dev',  ['image', 'webpack-task', 'serve', 'watcher']);
