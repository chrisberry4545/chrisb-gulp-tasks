const gulp = require('gulp');
const runSequence = require('run-sequence');
const browserify = require('browserify');
const babelify = require('babelify');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

module.exports = (config) => {
    gulp.task('scripts-dev', () => {
        return browserify({
            entries: config.clientEntryPoint,
            debug: true,
        })
            .transform(babelify.configure({
                presets: ['es2015'],
            }))
            .bundle()
            .pipe(source(config.outputFileName))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true,
            }))
            .pipe(sourcemaps.write(config.dir.sourceMaps))
            .pipe(gulp.dest(config.dir.build));
    });
};
