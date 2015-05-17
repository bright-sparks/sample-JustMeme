var gulp = require("gulp");
var babel = require("gulp-babel");
var jshint = require("gulp-jshint");
var watch = require("gulp-watch");
var jsFiles = ["./shared/**/*.js", "./views/**/*.js"];

gulp.task("jshint", function() {
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter());
});

gulp.task("babel", function() {
	gulp.src(jsFiles, { base: "./" })
		.pipe(babel())
		.pipe(gulp.dest("../app/"));
});

gulp.task("copy", function() {
	gulp.src([
		"./App_Resources/**/*",
		"./images/**/*",
		"./libs/**/*",
		"./node_modules/lodash/index.js",
		"./node_modules/marked/marked.min.js",
		"./node_modules/nativescript-social-share/*.js",
		"./tns_modules/**/*",
		"./views/**/*.{xml,css,md}",
		"./app.css",
		"./app.js",
		"package.json"
	], { base: "./" })
		.pipe(gulp.dest("../app/"));
});

gulp.task("watch", ["copy", "babel"], function() {
	gulp.watch(jsFiles, ["copy", "babel"]);
});

gulp.task( "default", ["watch"]);