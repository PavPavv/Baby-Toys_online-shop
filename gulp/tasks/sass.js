module.exports = function() {
	$.gulp.task('sass', function() {
		return $.gulp.src('app/static/scss/*.scss')
			.pipe($.sass({}))
			.pipe($.autoprefixer({
				browsers: ['last 10 versions']
			}))
			.on("error", $.notify.onError({
		        title: "Style"
		      }))
			.pipe($.gulp.dest('dist/css/'))
	});
}
