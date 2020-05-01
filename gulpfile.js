
const { src, dest, watch, series, parallel } = require('gulp');

const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');

const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

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
    scssPath: 'src/scss/**/*.scss',
    jsPath: 'src/js/**/*.js'
}

function scssTask() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist'));
}

function jsTask() {
    return src([files.jsPath])
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(sourcemaps.write('.'))
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
);

exports.dev = series(
    parallel(scssTask, jsTask),
    serve,
    watchTask
);
