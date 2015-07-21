var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('scss/**/*.scss')
		.pipe(sass({errLogToConsole: true}))
		.pipe(gulp.dest('./css/'))
});

gulp.task('default', ['sass'], function () {
	gulp.watch("scss/**/*.scss", ['sass']);
});