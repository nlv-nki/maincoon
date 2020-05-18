
let favicons = require("gulp-favicons"),
debug = require("gulp-debug");


faviconsPATH = {
  "input": "./source/pictures/favicons/",
  "ouput": "./public/img/favicons/"
};


$.gulp.task("favicons", () => {
    return $.gulp.src(faviconsPATH.input)
        .pipe(favicons({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe($.gulp.dest(faviconsPATH.ouput))
        .pipe(debug({
            "title": "Favicons"
        }));
});
