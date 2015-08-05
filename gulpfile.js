var gulp = require("gulp");
var jscs = require("gulp-jscs");
var jshint = require("gulp-jshint");

var jsFiles = ["app/shared/**/*.js", "app/views/**/*.js"];

gulp.task("jscs", function() {
	gulp.src(jsFiles)
		.pipe(jscs());
});

gulp.task("jshint", function() {
	return gulp.src(jsFiles)
		.pipe(jshint())
		.pipe(jshint.reporter());
});

gulp.task("lint", ["jshint", "jscs"]);
