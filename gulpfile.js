var gulp = require("gulp");
var sass = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");

gulp.task("move-css", function(){
	return gulp.src('./source/scss/*.scss')
		   .pipe(sass())
		   .pipe(gulp.dest('./dist/css'));
});


gulp.task('move-html', function(){
	return gulp.src('./source/*.html')
		   .pipe(htmlmin({collapseWhitespace: true}))
		   .pipe(gulp.dest('./dist'));
});

gulp.task('background', function() {
	gulp.watch('./source/scss/*.scss',['move-css']);
	gulp.watch('./source/*.html',['move-html']);
});