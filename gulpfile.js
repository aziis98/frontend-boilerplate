
const { src, dest, watch, series, parallel } = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const server = require('browser-sync').create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
        baseDir: './'
    }
  });
  done();
}

const files = {
    htmlPath: 'index.html',
    scssPath: 'app/scss/**/*.scss',
    jsPath: 'app/js/**/*.js'
}

function scssTask() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist'));
}

function jsTask() {
    return src([files.jsPath])
        .pipe(concat('bundle.js'))
        .pipe(dest('dist'));
}

function watchTask() {
    watch([files.htmlPath], reload)
    watch([files.scssPath, files.jsPath],
        series(
            parallel(scssTask, jsTask),
            reload
        )
    );
}

exports.default = series(
    parallel(scssTask, jsTask),
    serve,
    watchTask
);
