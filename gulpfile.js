
var gulp = require("gulp");
    var sass = require("gulp-sass");
    gulp.task("sass", function(){
        return gulp.src("sass/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"));
    });

var autoprefixer = require('gulp-autoprefixer');
gulp.task('prefix', function() {
  gulp.watch('sass/style.scss', ['sass']);
  gulp.src('sass/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
          browsers: ['last 10 versions']
      }))
      .pipe(gulp.dest('css'))
});
