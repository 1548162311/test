var gulp=require('gulp');
var uglify=require('gulp-uglify');
var less=require('gulp-less');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
  	root:'app',
  	livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/*.less'], ['style']);
});

gulp.task('html',function(){
	return gulp.src('./app/index.html')
	 .pipe(gulp.dest('./dest'))
		.pipe(connect.reload());
})

gulp.task('style', function () {
  return gulp.src('./app/index.less')
    .pipe(less())
    .pipe(gulp.dest('./dest'))
    .pipe(connect.reload());
});

gulp.task('default',['connect','watch','html','style']);