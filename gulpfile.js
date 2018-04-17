var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var connect       = require('gulp-connect');

var publicPath = './dist/';


gulp.task('connect', function(){
    connect.server({
        port:9797,
        root:'./dist'
    })
});


gulp.task('browserify', function() {
    return browserify('./src/js/Index.js')
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest(publicPath+'js'));
});


// Sass
gulp.task('sass', function () {
    gulp.src('./src/sass/fly.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(publicPath+'css'));
});


// Watch
gulp.task('watch', function () {
    watch('./src/js/**/*.js', function(event) {
        gulp.start('browserify');
    });
    watch('./src/sass/**/*.scss', function(event) {
        gulp.start('sass');
    });
});

gulp.task('default', ['sass','browserify','watch','connect']);
 







