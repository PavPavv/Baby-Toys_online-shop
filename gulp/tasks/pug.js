module.exports = function() {
	$.gulp.task('pug', function() {
	return $.gulp.src('app/pug/*.pug')
		.pipe($.pug({
			pretty:true
		}))
		.pipe($.gulp.dest('dist'))
	});
}