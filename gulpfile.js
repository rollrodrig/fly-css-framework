var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var connect       = require('gulp-connect');
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

var publicPath = './dev/';

gulp.task('connect', function(){
    connect.server({
        port:9797,
        root:'./dev'
    })
});

gulp.task('browserify', function() {
    return browserify('./dev/js/fly/src/Fly.js')
        .bundle()
        .pipe(source('fly.js'))
        .pipe(gulp.dest(publicPath+'js/fly/dev/'));
});

// Build
gulp.task('build', function () {
    gulp.src('./src/sass/fly.min.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest(publicPath+'css'));
    
    gulp.src(publicPath+'/css/fly.css')
        .pipe(gulp.dest('./dist/'));
    gulp.src(publicPath+'/css/fly.min.css')
            .pipe(gulp.dest('./dist/'));
    gulp.src(publicPath+'/js/fly/dev/fly.js')
            .pipe(gulp.dest('./dist/'));

});

gulp.task('copy', function () {
    gulp.src('./src/templates/index.html')
        .pipe(gulp.dest('./public/'));
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
    watch('./dev/js/fly/src/components/*.js', function(event) {
        gulp.start('browserify');
    });
    watch('./src/sass/**/*.scss', function(event) {
        gulp.start('sass');
    });
});

gulp.task('default', ['sass','browserify','watch','connect']);
 







