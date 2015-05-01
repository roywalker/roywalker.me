var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    minifyCSS = require('gulp-minify-css'),
    package = require('./package.json');

gulp.task('css', function () {
    return gulp.src('src/scss/style.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('js',function(){
  gulp.src('src/js/scripts.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('app/assets/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/assets/js'))
    .pipe(browserSync.reload({stream:true, once: true}));
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "app"
        }
    });
});
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['css', 'js', 'browser-sync'], function () {
    gulp.watch("src/scss/*/*.scss", ['css']);
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("app/*.html", ['bs-reload']);
});