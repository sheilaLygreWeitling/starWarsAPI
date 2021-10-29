const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
var gulp = require("gulp");
var babel = require("gulp-babel");

function buildJavascript() {
    return src("js/**/*.js")
        .pipe(babel({
            presets: ["@babel/preset-env"]
        }))
        .pipe(dest("dist"));
}

function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        /*         .pipe(purgecss({ content: ['*.html'] })) */
        .pipe(dest('css'))
}

function watchTask() {
    watch(['sass/**/*.scss', "js/**/*.js", '*.html'], series(buildStyles, buildJavascript))
}

exports.default = series(buildStyles, buildJavascript, watchTask);
