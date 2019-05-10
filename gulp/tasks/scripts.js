module.exports = function() {
	$.gulp.task('scripts:lib', function() {
		return $.gulp.src(['node_modules/jquery/dist/jquery.min.js','node_modules/slick-carousel/slick/slick.min.js'])
		.pipe($.concat('libs.min.js'))
		.pipe($.gulp.dest('dist/js'))
	});

	$.gulp.task('scripts', function() {
		return $.gulp.src('app/static/js/main.js')
		.pipe($.gulp.dest('dist/js'))
	});
}