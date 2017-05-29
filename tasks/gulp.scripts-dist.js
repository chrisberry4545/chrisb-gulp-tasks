const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

module.exports = (config) => {
    gulp.task('scripts-dist', () => {
        return browserify({
            entries: config.clientEntryPoint,
            debug: false,
        })
            .transform(babelify.configure({
                presets: ['es2015'],
            }))
            .bundle()
            .pipe(source(config.outputFileName.replace('.js', '.min.js')))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest(config.dir.build));
    });
};
