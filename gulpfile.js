/**
 * Created by mblazkowska on 2016-02-20.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
    console.log('dzia³a');
});

gulp.task('styles', function() {
    gulp.src('app/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});
gulp.task('build', ['styles']);
gulp.task('default', ['styles']);