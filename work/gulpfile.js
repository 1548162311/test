var gulp = require('gulp');
var less =require('gulp-less');

gulp.task('default',function(){
	return gulp.src('jike.less')
	.pipe(less())
	.pipe(gulp.dest('./dest'));

})