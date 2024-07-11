const gulp = require("gulp");
const replace = require("gulp-replace");

gulp.task("update-class-names", function () {
  return gulp
    .src(
      "C:/Users/gabri/Desktop/code/biot/incendios-section/incendios-section.html"
    )
    .pipe(
      replace(/class="([\w\s-]*)"/g, function (match, p1) {
        console.log(`Replacing '${match}' with 'fire-${p1}'`);
        return `class="fire-${p1}"`;
      })
    )
    .pipe(
      gulp.dest("C:/Users/gabri/Desktop/code/biot/incendios-section/")
    );
});
