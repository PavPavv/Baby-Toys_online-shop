module.exports = function() {
	$.gulp.task('serve', function() {
		$.browserSync.init({
			server: 'dist'
		});

		$.browserSync.watch('dist/**/*.*').on('change', $.browserSync.reload);
	});
}
