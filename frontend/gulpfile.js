//npm install gulp gulp-sass sass --save-dev
//npm install gulp-cli

//khong can file nay de bien dich nua cai node-sass:
//npm install -save node-sass scr/scss/**/*.scss

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("src/scss/**/*.scss")
    .pipe(sass())
    // .pipe(purgecss({ content: ["*.html"] }))
    .pipe(dest("src/css"));
}

function watchTask() {
//   watch(["scr/scss/**/*.scss", "*.html"], buildStyles);
  watch(["scr/scss/**/*.scss"], buildStyles);

}

exports.default = series(buildStyles, watchTask);
