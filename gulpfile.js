'use strict';

global.$ = {
	gulp: require('gulp'),
	pug: require('gulp-pug'),
	sass: require('gulp-sass'),
	autoprefixer: require('gulp-autoprefixer'),
	notify: require('gulp-notify'),
	concat: require('gulp-concat'),
	imagemin: require('gulp-imagemin'),
	mozjpeg: require('imagemin-mozjpeg'),
	browserSync: require('browser-sync').create(),
	cheerio: require('gulp-cheerio'),
	svgSprite: require('gulp-svg-sprite'),
	svgmin: require('gulp-svgmin'),
	replace: require('gulp-replace'),


	path: {
		tasks: require('./gulp/config/tasks.js')
	} 
};

$.path.tasks.forEach(function(taskPath) {
	require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'svg', 'fonts', 'img:dev'),
	$.gulp.parallel('watch', 'serve')
	));

$.gulp.task('build', $.gulp.series(
	$.gulp.parallel('pug', 'sass', 'scripts:lib', 'scripts', 'svg', 'fonts', 'img:build'),
	$.gulp.parallel('watch', 'serve')
	));
