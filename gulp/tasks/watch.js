module.exports = function() {
	$.gulp.task('watch', function() {
		$.gulp.watch('app/pug/**/*.pug', $.gulp.series('pug'))
		$.gulp.watch('app/static/scss/**/*.scss', $.gulp.series('sass'))
		$.gulp.watch('app/static/js/**/*.js', $.gulp.series('scripts'))
		$.gulp.watch('app/static/i/**/*', $.gulp.series('img:dev'))
	});	
}
