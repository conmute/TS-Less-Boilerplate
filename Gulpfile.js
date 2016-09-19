    var gulp = require("gulp"),
      tslint = require("gulp-tslint"),
     stylish = require("gulp-tslint-stylish"),
  sourcemaps = require("gulp-sourcemaps"),
      concat = require("gulp-concat"),
         tsc = require("gulp-typescript"),
        less = require("gulp-less"),
autoprefixer = require("less-plugin-autoprefix"),
       watch = require("gulp-watch");

var storage = {
    ts: "assets/ts/**/*.ts",
    js: "assets/js/",
    css: "assets/css/",
    less: "assets/less/app.less",
    lessWatch: "assets/less/**/*.less"
};

gulp.task("lint", function() {

    return gulp.src([storage.ts])
                .pipe(tslint())
                .pipe(tslint.report(stylish, {
                  emitError: false,
                  sort: true,
                  bell: true
                }));

});

gulp.task("compile", ["lint"], function() {

    return gulp.src([storage.ts])
        .pipe(sourcemaps.init())
        .pipe(tsc())
        .pipe(concat("app.js"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(storage.js));

});

gulp.task("less", function() {

  var autoprefix = new autoprefixer({ browsers: ['last 2 versions'] });

  return gulp.src(storage.less)
             .pipe(sourcemaps.init())
             .pipe(less({
                plugins: [autoprefix]
              }))
              .pipe(sourcemaps.write("."))
              .pipe(gulp.dest(storage.css));

});

gulp.task("build", ["compile", "less"]);

gulp.task("watch", function(argument) {
    gulp.watch(storage.ts, ["compile"]);
    gulp.watch(storage.lessWatch, ["less"]);
});
