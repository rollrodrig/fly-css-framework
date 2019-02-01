var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var connect       = require('gulp-connect');
var pug = require('gulp-pug')

// local server
gulp.task('connect', function(){
    connect.server({
        port:9797,
        root:'./docs'
    })
});

// Sass
gulp.task('sass', function () {
    gulp.src('./sass/fly.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./docs/css'));
});

// pug
gulp.task('pug',function() {
    // return gulp.src('./docs/pug/*.pug')
    gulp.src(['./pug/**/*.pug','!./pug/**/_*.pug'])
    .pipe(pug({
        doctype: 'html',
        pretty: true
    }))
    .pipe(gulp.dest('./docs/'));
});

// Build
gulp.task('build', function () {
    gulp.src('./sass/fly.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));

    gulp.src('./sass/fly.min.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));

    gulp.src('./docs/css/fly-montserrat.css')
        .pipe(gulp.dest('./dist/css'));

    gulp.src('./docs/css/fly-opensans.css')
        .pipe(gulp.dest('./dist/css'));

    gulp.src('./docs/css/font-awesome.css')
        .pipe(gulp.dest('./dist/css'));
        
    gulp.src('./docs/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts/'));
});

// Watch
gulp.task('watch', function () {
    watch('./sass/**/*.scss', function(event) {
        gulp.start('sass');
    });
    watch('./pug/*.pug', function(event) {
        gulp.start('pug');
    });
});

// init
gulp.task('default', ['sass','pug','watch','connect']);
 







