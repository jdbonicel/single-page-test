var gulp = require('gulp'),
	less = require('gulp-less'),
	connect = require('gulp-connect');
 
gulp.task('connect', function() {
	connect.server({
	    root: '/Users/JD/Documents/JD/project/tchat/',
	    livereload: true,
	    port: 8888
	});
});
 
gulp.task('html', function () {
	return gulp.src('src/view/*.html')
	.pipe(connect.reload());
});

gulp.task('less', function() {
	return gulp.src('src/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(['src/view/*.html'], ['html']);
	gulp.watch(['src/less/*.less'], ['less']);
});

gulp.task('default', ['connect','less', 'html', 'watch']);