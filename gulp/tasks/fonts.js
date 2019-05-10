module.exports = function() {
	$.gulp.task('fonts', function() {
	return $.gulp.src('app/static/fonts/**/*.{ttf,woff,woff2,svg,eot}')
		.pipe($.gulp.dest('dist/css/fonts'))
	});
}