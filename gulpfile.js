//Author: Sanchita Kanade
var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var minifyCSS = require('gulp-minify-css');

function css() {
    return src('src/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(dest('dist/css'))
};

exports.default = function() {
    watch ('src/*.scss', css); //here css is a function, which is called when any sass file changes
};

