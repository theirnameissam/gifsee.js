var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    nodemon = require('gulp-nodemon'),
    multi = require('gulp-multi-dest'),
    babel = require('gulp-babel'),
    rename = require("gulp-rename");


gulp.task('js', function () {
    return gulp.src('src/js/gifsee.js')
    .pipe(babel({presets: ['babili']}))
    .pipe(rename('gifsee.min.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('scss', function () {
    return gulp.src('src/scss/gifsee.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix({ browsers: ['last 5 versions'], cascade: false }))
    .pipe(rename('gifsee.min.css'))
    .pipe(multi(['dist/', "src/css"]));
});

gulp.task('server', function () {
    nodemon({
        script: 'index.js',
        ext: 'js, html, scss, css'
    });
});
gulp.task('default', ['server'], function () {
    gulp.watch('src/scss/*.scss', ['scss']);
});