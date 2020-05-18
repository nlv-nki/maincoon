let plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    mqpacker = require('css-mqpacker'),
    autoprefixer = require("autoprefixer");
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    postcss = require("gulp-postcss"),

module.exports = function () {
  $.gulp.task('styles', () => {
      return $.gulp.src($.projectPaths.styles.src + '*.{sass,scss}')
          .pipe(plumber())
          .pipe(sourcemaps.init())
          .pipe(sass())
          .pipe(postcss([
            mqpacker({ sort: true}),
            autoprefixer(),
            cssnano()
          ]))
          .pipe(rename({suffix: '.min'}))
          .pipe(plumber.stop())
          .pipe(sourcemaps.write("./maps/"))
          .pipe($.gulp.dest($.projectPaths.styles.dist))
          .pipe($.browserSync.stream());
  });
};
