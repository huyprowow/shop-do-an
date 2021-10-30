//npm install gulp gulp-sass sass --save-dev
//npm install gulp-cli

const {src,dest,watch,series}=require('gulp');
const sass=require('gulp-sass')(require('sass'));

function buildStyles(){
    return src('scss/**/*.scss').pipe(sass()).pipe(dest('src/css'))
}

function watchTask(){
    watch('scss/**/*.scss',buildStyles)
}

exports.default = series(buildStyles,watchTask);