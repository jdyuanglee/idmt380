const gulp = require('gulp');

gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('css', () => {
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', () => {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('img', () => {
  return gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img/'));
});

gulp.task('default', ['html','css','js','img']);
