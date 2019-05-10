module.exports = function() {
	$.gulp.task('img:dev', function() {
		return $.gulp.src('app/static/i/**/*.{png,jpg,jpeg,gif,svg}')
			.pipe($.gulp.dest('dist/i/'))
	});

	$.gulp.task('img:build', function() {
		return $.gulp.src('app/static/i/**/*.{png,jpg,jpeg,gif,svg}')
			.pipe($.imagemin())
			.pipe($.gulp.dest('dist/i/'))
	});
}