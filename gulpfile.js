var gulp = require('gulp');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var twig = require('gulp-twig');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['templates'], function() {

    browserSync.init({
        server: "./dist",
        files: "dist/css/style.css"
    });

    gulp.watch("src//tpl/**/*.twig", ['templates']).on('change', browserSync.reload);
});

gulp.task('templates', function () {

    return gulp.src('./src/tpl/*.twig')
        .pipe(twig())
        .pipe(gulp.dest('./dist'));
});

gulp.task('webpack-task', function() {
    return gulp.src('src/scripts/index.js')
        .pipe(gulpWebpack(require('./webpack.config.js'), webpack))
        .pipe(gulp.dest('dist/'));
});

// gulp.task('watcher',function(){
//     gulp.watch('src/tpl/**/*.twig', ['templates']);
// });

//gulp.task('dev',  gulp.parallel('webpack-task', 'serve'));
gulp.task('dev',  ['webpack-task', 'serve']);