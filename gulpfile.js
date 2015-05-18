var del = require("del");
var gulp = require("gulp");
var babel = require("gulp-babel");
var jscs = require("gulp-jscs");
var jshint = require("gulp-jshint");
var watch = require("gulp-watch");

var jsFiles = ["src/shared/**/*.js", "src/views/**/*.js"];

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

gulp.task("babel", function() {
	gulp.src(jsFiles, { base: "src" })
		.pipe(babel())
		.pipe(gulp.dest("app"));
});

// TODO: Why does this throw errors on subsequent runs?
gulp.task("clean", function() {
	del(["app/**/*"]);
});

gulp.task("copy", function() {
	gulp.src(["**/*"], { base: "src" })
		.pipe(gulp.dest("app"));
});

gulp.task("watch", ["copy"], function() {
	gulp.watch(jsFiles, ["babel"]);
});

gulp.task( "default", ["watch"]);