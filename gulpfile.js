const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');

gulp.task('html', () => {
  del(['./dist/*.html']);
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('css', () => {
  del(['./dist/css/*.+(css|map)']);
  return gulp.src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', () => {
  del(['./dist/js/*.+(js|map)']);
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    // .pipe(concat('all.js'))
    .pipe(uglify({mangle:true}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('img', () => {
  del(['./dist/img/*']);
  return gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img/'));
});

gulp.task('default', ['html','css','js','img']);
