var concat = require('gulp-concat');
var gulp = require('gulp');

gulp.task('concat', function () {
  return gulp.src([
    './dist-elements/inline*.js',
    './dist-elements/poly*.js',
    './dist-elements/main*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist-elements/'));
});

gulp.task('copy', function () {
  return gulp
    .src('./src/index.bundle.html')
    .pipe(gulp.dest('./dist-elements/'))
});
