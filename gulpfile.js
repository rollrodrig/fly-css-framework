var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var connect       = require('gulp-connect');
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

var publicPath = './dist/';


gulp.task('connect', function(){
    connect.server({
        port:9797,
        root:'./dist'
    })
});

// gulp.task('minify-css', () => {
//   return gulp.src('./dist/css/fly.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(source('fly.min.css'))
//     .pipe(gulp.dest('./dist/css'));
// });


gulp.task('browserify', function() {
    return browserify('./dist/js/fly/src/Fly.js')
        .bundle()
        .pipe(source('fly.js'))
        .pipe(gulp.dest(publicPath+'js/fly/dist/'));
});


// Sass minify
gulp.task('minify-sass', function () {
    gulp.src('./src/sass/fly.min.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(publicPath+'css'));
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
    watch('./dist/js/fly/src/components/*.js', function(event) {
        gulp.start('browserify');
    });
    watch('./src/sass/**/*.scss', function(event) {
        gulp.start('sass');
    });
});

gulp.task('default', ['sass','browserify','watch','connect']);
 







